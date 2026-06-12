import * as THREE from 'three';
import { GAME_STATES, GAME, PLAYER } from '../data/constants.js';
import { Input } from './Input.js';
import { Camera } from './Camera.js';
import { AssetGen } from './AssetGen.js';
import { TileMap } from '../world/TileMap.js';
import { DuskHollowData } from '../world/DuskHollow.js';
import { Player } from '../entities/Player.js';
import { Enemy } from '../entities/Enemy.js';
import { Combat } from '../systems/Combat.js';
import { BloodMeter } from '../systems/BloodMeter.js';
import { DayNight } from '../systems/DayNight.js';
import { Stealth } from '../systems/Stealth.js';
import { BossAldric } from '../entities/BossAldric.js';
import { HUD } from '../ui/HUD.js';
import { Particles } from '../systems/Particles.js';

export class Game {
  constructor(canvas) {
    this.canvas = canvas;
    
    // Setup Three.js
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: false });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x0a0a0a);
    this.scene.fog = new THREE.FogExp2(0x0a0a0a, 0.002);

    window.addEventListener('resize', () => {
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      if (this.camera && this.camera.threeCamera) {
        this.camera.threeCamera.aspect = window.innerWidth / window.innerHeight;
        this.camera.threeCamera.updateProjectionMatrix();
      }
    });

    this.input = new Input();
    this.camera = new Camera();
    
    // Generate assets (Now converts to THREE.CanvasTexture)
    this.assetGen = new AssetGen();
    this.assetGen.generateAll();

    this.dayNight = new DayNight();
    this.dayNight.initLighting(this.scene);

    this.tileMap = new TileMap(DuskHollowData, this.assetGen, this.scene);
    
    this.state = GAME_STATES.MENU; 
    this.lastTime = performance.now();
    
    this.player = new Player(30 * GAME.TILE_SIZE, 26 * GAME.TILE_SIZE, this.scene, this.assetGen);
    
    this.combatSystem = new Combat();
    this.bloodMeter = new BloodMeter(this.player);
    this.stealthSystem = new Stealth();
    this.particleSystem = new Particles(this.scene);
    
    this.combatSystem.particleSystem = this.particleSystem;
    
    this.hud = new HUD();
    this.hud.setIcons(this.assetGen);
    this.entities = [];
    
    this.entities.push(new BossAldric(30 * GAME.TILE_SIZE, 15 * GAME.TILE_SIZE, this.scene, this.assetGen));
    this.entities.push(new Enemy(38 * GAME.TILE_SIZE, 26 * GAME.TILE_SIZE, this.scene, this.assetGen));
    this.entities.push(new Enemy(28 * GAME.TILE_SIZE, 20 * GAME.TILE_SIZE, this.scene, this.assetGen));

    // Center camera on player initially (so background menu shows the scene)
    this.camera.x = this.player.x + this.player.width/2;
    this.camera.z = this.player.y + this.player.height/2;
    this.camera.threeCamera.position.x = this.camera.x + this.camera.cameraOffset.x;
    this.camera.threeCamera.position.y = this.camera.cameraOffset.y;
    this.camera.threeCamera.position.z = this.camera.z + this.camera.cameraOffset.z;
    this.camera.threeCamera.lookAt(this.camera.x, 0, this.camera.z);
  }

  start() {
    requestAnimationFrame((time) => this.loop(time));
  }

  restart() {
    // 1. Reset Player
    this.player.hp = PLAYER.START_HP;
    this.player.blood = 50;
    this.player.isStarving = false;
    this.player.isDead = false;
    this.player.isBatForm = false;
    this.player.isDodging = false;
    this.player.isInvincible = false;
    this.player.invincibilityTimer = 0;
    this.player.x = 30 * GAME.TILE_SIZE;
    this.player.y = 26 * GAME.TILE_SIZE;
    this.player.sprite.position.set(this.player.x, 0, this.player.y);
    this.player.humanoidGroup.visible = true;
    this.player.batGroup.visible = false;
    this.player.setOpacity(1.0);
    
    // 2. Reset Day/Night
    this.dayNight.time = 0;
    this.dayNight.darknessAlpha = 0;
    this.dayNight.updatePlayerLight(this.player);

    // 3. Clear and Respawn Entities
    for (let entity of this.entities) {
      if (entity.sprite) {
        this.scene.remove(entity.sprite);
      }
    }
    this.entities = [];
    this.entities.push(new BossAldric(30 * GAME.TILE_SIZE, 15 * GAME.TILE_SIZE, this.scene, this.assetGen));
    this.entities.push(new Enemy(38 * GAME.TILE_SIZE, 26 * GAME.TILE_SIZE, this.scene, this.assetGen));
    this.entities.push(new Enemy(28 * GAME.TILE_SIZE, 20 * GAME.TILE_SIZE, this.scene, this.assetGen));

    // 4. Clear particles and combat hitboxes
    this.combatSystem.activeAttacks = [];
    for (let p of this.particleSystem.particles) {
      this.scene.remove(p.mesh);
      p.mesh.material.dispose();
    }
    this.particleSystem.particles = [];
    
    // Hide Game Over and Victory screens
    document.getElementById('game-over-screen').classList.remove('visible');
    document.getElementById('victory-screen').classList.remove('visible');
  }

  startPlaying() {
    this.restart();
    this.state = GAME_STATES.PLAYING;
    this.lastTime = performance.now();
    document.getElementById('hud-layer').style.display = 'flex';
  }

  loop(time) {
    const deltaTime = (time - this.lastTime) / 1000;
    this.lastTime = time;

    this.update(deltaTime);
    this.render();

    this.input.update();

    requestAnimationFrame((t) => this.loop(t));
  }

  update(dt) {
    if (this.state !== GAME_STATES.PLAYING) return;

    this.player.update(dt, this.input, this.tileMap, this.combatSystem);
    this.bloodMeter.update(dt, this.input, this.dayNight, this.entities, this.tileMap);
    this.dayNight.update(dt);
    this.stealthSystem.update(dt, this.player, this.entities, this.dayNight);

    for (let entity of this.entities) {
      if (entity instanceof BossAldric) {
        entity.update(dt, this.player, this.tileMap, this.combatSystem);
      } else {
        entity.update(dt, this.tileMap, this.player, this.combatSystem);
      }
    }

    const allCombatants = [this.player, ...this.entities];
    this.combatSystem.update(dt, allCombatants);
    
    this.particleSystem.update(dt);

    // Camera targets player center
    this.camera.update(this.player.x + this.player.width/2, this.player.y + this.player.height/2);
    
    // Update player point light
    this.dayNight.updatePlayerLight(this.player);
    
    this.hud.update(this);

    // Check Loss conditions
    if (this.player.hp <= 0 || this.player.isDead) {
      this.state = GAME_STATES.GAME_OVER;
      document.getElementById('game-over-screen').classList.add('visible');
      document.getElementById('hud-layer').style.display = 'none';
    }

    // Check Win conditions (Boss Aldric defeated)
    const aldric = this.entities.find(e => e instanceof BossAldric);
    if (aldric && aldric.isDead) {
      this.state = GAME_STATES.VICTORY;
      document.getElementById('victory-screen').classList.add('visible');
      document.getElementById('hud-layer').style.display = 'none';
    }
  }

  render() {
    if (this.state === GAME_STATES.PLAYING) {
      // Screen effects
      if (this.player.isStarving) {
        const pulse = Math.abs(Math.sin(Date.now() / 300));
        document.getElementById('hud-layer').style.boxShadow = `inset 0 0 ${100 + pulse*100}px rgba(255,0,0,${0.3 * pulse})`;
      } else {
        document.getElementById('hud-layer').style.boxShadow = 'none';
      }
    }
    this.renderer.render(this.scene, this.camera.threeCamera);
  }
}
