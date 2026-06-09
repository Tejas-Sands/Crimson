import * as THREE from 'three';
import { GAME_STATES, GAME } from '../data/constants.js';
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
    
    this.state = GAME_STATES.PLAYING; 
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
    this.entities.push(new Enemy(34 * GAME.TILE_SIZE, 26 * GAME.TILE_SIZE, this.scene, this.assetGen));
    this.entities.push(new Enemy(28 * GAME.TILE_SIZE, 20 * GAME.TILE_SIZE, this.scene, this.assetGen));
  }

  start() {
    requestAnimationFrame((time) => this.loop(time));
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
        entity.update(dt, this.tileMap);
      }
    }

    const allCombatants = [this.player, ...this.entities];
    this.combatSystem.update(dt, allCombatants);
    
    this.particleSystem.update(dt);

    // Camera targets player center (Note: 2D y is now 3D z)
    this.camera.update(this.player.x + this.player.width/2, this.player.y + this.player.height/2);
    
    // Update player point light
    this.dayNight.updatePlayerLight(this.player);
    
    this.hud.update(this);
  }

  render() {
    if (this.state === GAME_STATES.PLAYING) {
      // Screen effects
      if (this.player.isStarving) {
        const pulse = Math.abs(Math.sin(Date.now() / 300));
        // We can handle vignette with CSS overlay or Post-Processing.
        // For now, let's use a CSS trick in HUD.
        document.getElementById('hud-layer').style.boxShadow = `inset 0 0 ${100 + pulse*100}px rgba(255,0,0,${0.3 * pulse})`;
      } else {
        document.getElementById('hud-layer').style.boxShadow = 'none';
      }

      this.renderer.render(this.scene, this.camera.threeCamera);
    }
  }
}
