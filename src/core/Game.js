import * as THREE from 'three';
import { GAME_STATES, GAME, PLAYER } from '../data/constants.js';
import { Input } from './Input.js';
import { Camera } from './Camera.js';
import { AssetGen } from './AssetGen.js';
import { TileMap } from '../world/TileMap.js';
import { LEVEL_BLUEPRINTS } from '../data/LevelBlueprints.js';
import { ThemeManager } from '../world/ThemeManager.js';
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
    this.currentThemeId = 1;
    
    // Setup Three.js
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: false });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    
    this.scene = new THREE.Scene();
    
    // Apply Theme 1 defaults
    const theme = ThemeManager.getTheme(this.currentThemeId);
    this.scene.background = new THREE.Color(theme.bgColor);
    this.scene.fog = new THREE.FogExp2(theme.fogColor, theme.fogDensity);

    window.addEventListener('resize', () => {
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      if (this.camera && this.camera.threeCamera) {
        this.camera.threeCamera.aspect = window.innerWidth / window.innerHeight;
        this.camera.threeCamera.updateProjectionMatrix();
      }
    });

    this.input = new Input();
    this.camera = new Camera();
    
    // Generate assets with theme
    this.assetGen = new AssetGen();
    this.assetGen.generateAll(this.currentThemeId);

    this.dayNight = new DayNight();
    this.dayNight.setTheme(this.currentThemeId);
    this.dayNight.initLighting(this.scene);

    this.state = GAME_STATES.MENU; 
    this.lastTime = performance.now();
    
    this.player = new Player(0, 0, this.scene, this.assetGen);
    
    this.combatSystem = new Combat();
    this.bloodMeter = new BloodMeter(this.player);
    this.stealthSystem = new Stealth();
    this.particleSystem = new Particles(this.scene);
    
    // Wire combat system references
    this.combatSystem.particleSystem = this.particleSystem;
    this.combatSystem.camera = this.camera;
    
    this.hud = new HUD();
    this.hud.setIcons(this.assetGen);
    this.entities = [];

    // Environmental particle timer
    this.envParticleTimer = 0;

    // Load initial level layout & objects
    this.loadLevel(1);
  }

  /**
   * Set the level theme (1-5). Updates scene visuals, lighting, fog, tiles.
   */
  setTheme(themeId) {
    this.currentThemeId = themeId;
    const theme = ThemeManager.getTheme(themeId);
    
    this.scene.background = new THREE.Color(theme.bgColor);
    this.scene.fog = new THREE.FogExp2(theme.fogColor, theme.fogDensity);
    this.dayNight.setTheme(themeId);
  }

  loadLevel(levelId) {
    this.currentLevelId = levelId;
    const blueprint = LEVEL_BLUEPRINTS[levelId];
    if (!blueprint) return;

    this.setTheme(blueprint.themeId);

    // Build map layers
    const [ground, objects] = blueprint.buildLayers();
    const mapData = {
      width: blueprint.width,
      height: blueprint.height,
      layers: [ground, objects]
    };

    // Remove old tilemap and interactive meshes from the scene
    if (this.tileMap) {
      const toRemove = [];
      this.scene.traverse(child => {
        if (child.isMesh && child !== this.player.sprite && !child.isLight && !child.isDirectionalLight) {
          let p = child;
          let isPlayerPart = false;
          while (p) {
            if (p === this.player.sprite) {
              isPlayerPart = true;
              break;
            }
            p = p.parent;
          }
          if (!isPlayerPart) {
            toRemove.push(child);
          }
        }
      });
      for (let m of toRemove) {
        this.scene.remove(m);
        if (m.geometry) m.geometry.dispose();
        if (m.material) {
          if (Array.isArray(m.material)) {
            m.material.forEach(mat => mat.dispose());
          } else {
            m.material.dispose();
          }
        }
      }
    }

    // Re-instantiate tilemap
    this.tileMap = new TileMap(mapData, this.assetGen, this.scene);

    // Position player
    const spawnX = blueprint.playerSpawn.x * GAME.TILE_SIZE;
    const spawnY = blueprint.playerSpawn.y * GAME.TILE_SIZE;
    this.player.x = spawnX;
    this.player.y = spawnY;
    this.player.sprite.position.set(spawnX, 0, spawnY);
    this.player.hasKey = false;
    this.player.isStealthHidden = false;
    this.player.nearLoreNode = null;
    this.player.stealthAssassinations = 0;

    // Clear old entities from scene
    for (let entity of this.entities) {
      if (entity.sprite) {
        this.scene.remove(entity.sprite);
        entity.sprite.traverse(child => {
          if (child.isMesh) {
            if (child.geometry) child.geometry.dispose();
            if (child.material) {
              if (Array.isArray(child.material)) {
                child.material.forEach(mat => mat.dispose());
              } else {
                child.material.dispose();
              }
            }
          }
        });
      }
    }
    this.entities = [];

    // Spawn new entities
    for (let s of blueprint.spawns) {
      const x = s.x * GAME.TILE_SIZE;
      const y = s.y * GAME.TILE_SIZE;
      if (s.type === 'boss') {
        this.entities.push(new BossAldric(x, y, this.scene, this.assetGen));
      } else if (s.type === 'enemy') {
        this.entities.push(new Enemy(x, y, this.scene, this.assetGen, s.subType, s));
      }
    }

    // Clone objectives
    this.objectives = JSON.parse(JSON.stringify(blueprint.objectives));
    this.updateObjectivesUI();

    // Center camera on player
    this.camera.x = this.player.x + this.player.width/2;
    this.camera.z = this.player.y + this.player.height/2;
    this.camera.threeCamera.position.x = this.camera.x + this.camera.cameraOffset.x;
    this.camera.threeCamera.position.y = this.camera.cameraOffset.y;
    this.camera.threeCamera.position.z = this.camera.z + this.camera.cameraOffset.z;
    this.camera.threeCamera.lookAt(this.camera.x, 0, this.camera.z);

    // Update level intro title card in DOM
    const chapterEl = document.querySelector('.level-chapter');
    const titleEl = document.querySelector('.level-title');
    const descEl = document.querySelector('.level-desc');
    
    if (chapterEl) chapterEl.innerText = blueprint.chapter || "";
    if (titleEl) titleEl.innerText = blueprint.name;
    if (descEl) descEl.innerText = blueprint.introText;
    
    const nextBtn = document.getElementById('victory-retry-btn');
    if (nextBtn) {
      nextBtn.innerText = this.currentLevelId < 5 ? "Next Level" : "Start Anew";
    }
  }

  updateObjectivesUI() {
    const listEl = document.getElementById('objectives-list');
    if (!listEl) return;
    listEl.innerHTML = '';
    
    for (let obj of this.objectives) {
      const item = document.createElement('div');
      item.style.display = 'flex';
      item.style.alignItems = 'center';
      item.style.gap = '8px';
      
      const box = document.createElement('span');
      box.style.width = '8px';
      box.style.height = '8px';
      box.style.border = '1px solid #e74c3c';
      box.style.display = 'inline-block';
      if (obj.completed) {
        box.style.background = '#e74c3c';
        item.style.textDecoration = 'line-through';
        item.style.color = '#71717a';
      } else {
        box.style.background = 'transparent';
      }
      
      const label = document.createElement('span');
      label.innerText = obj.text + (obj.required ? '' : ' (Optional)');
      
      item.appendChild(box);
      item.appendChild(label);
      listEl.appendChild(item);
    }
  }

  completeObjective(id) {
    const obj = this.objectives.find(o => o.id === id);
    if (obj && !obj.completed) {
      obj.completed = true;
      this.updateObjectivesUI();
      if (this.particleSystem) {
        this.particleSystem.spawn(this.player.x, this.player.y, 'embers', 8);
      }
    }
  }

  spawnKeyAt(col, row) {
    const s = GAME.TILE_SIZE;
    const idx = row * this.tileMap.width + col;
    this.tileMap.layers[1][idx] = TILE_TYPES.KEY;
    
    const materials = {};
    for (let key in this.assetGen.tiles) {
      materials[key] = new THREE.MeshLambertMaterial({ 
        map: this.assetGen.tiles[key]
      });
    }
    const keyGeo = new THREE.BoxGeometry(s * 0.4, s * 0.1, s * 0.4);
    keyGeo.translate(0, 0.2, 0);
    
    const mesh = new THREE.Mesh(keyGeo, materials[TILE_TYPES.KEY]);
    mesh.position.set(col * s, 0.2, row * s);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    this.scene.add(mesh);
    
    this.tileMap.keyMeshes[`${col},${row}`] = mesh;
    if (this.particleSystem) {
      this.particleSystem.spawn(col * s, row * s, 'embers', 5);
    }
  }

  onKeyPickedUp() {
    this.completeObjective('find_key');
    if (this.particleSystem) {
      this.particleSystem.spawn(this.player.x, this.player.y, 'embers', 15);
    }
  }

  onDoorUnlocked(col, row) {
    this.completeObjective('unlock_gate');
    if (this.particleSystem && col !== undefined && row !== undefined) {
      const px = col * GAME.TILE_SIZE + GAME.TILE_SIZE / 2;
      const py = row * GAME.TILE_SIZE + GAME.TILE_SIZE / 2;
      this.particleSystem.spawn(px, py, 'embers', 25);
    } else if (this.particleSystem) {
      this.particleSystem.spawn(this.player.x, this.player.y, 'embers', 15);
    }
  }

  onStealthAssassination() {
    const stealthBonus = this.objectives.find(o => o.id === 'stealth_bonus');
    if (stealthBonus) {
      if (this.player.stealthAssassinations >= 2) {
        this.completeObjective('stealth_bonus');
      }
    }
  }

  readLoreNode(col, row) {
    const blueprint = LEVEL_BLUEPRINTS[this.currentLevelId];
    if (!blueprint) return;
    
    const loreNode = blueprint.spawns ? blueprint.spawns.find(n => n.type === 'lore_node' && n.x === col && n.y === row) : null;
    const text = loreNode ? loreNode.text : "A dusty, crumbling gravestone with faded crimson markings. You feel a strange pulse of ancient power...";
    
    this.showLoreDialog(text);
    
    if (this.tileMap) {
      this.tileMap.fadeLoreNode(col, row);
    }
    
    this.completeObjective('read_lore');
  }

  showLoreDialog(text) {
    const modal = document.getElementById('lore-modal');
    const textEl = document.getElementById('lore-text');
    if (modal && textEl) {
      textEl.innerText = text;
      modal.classList.add('visible');
    }
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
    this.player.vx = 0;
    this.player.vy = 0;
    this.player.isStaggered = false;
    this.player.staggerTimer = 0;
    this.player.comboStep = 0;
    this.player.comboTimer = 0;
    this.player.isAttacking = false;
    this.player.attackCooldown = 0;
    this.player.attackRecovery = 0;
    this.player.humanoidGroup.visible = true;
    this.player.batGroup.visible = false;
    this.player.setOpacity(1.0);
    
    // 2. Reset Day/Night
    this.dayNight.time = 0;
    this.dayNight.darknessAlpha = 0;
    this.dayNight.updatePlayerLight(this.player);

    // 3. Load level layout, spawns, and objectives
    this.loadLevel(this.currentLevelId);

    // 4. Clear particles and combat hitboxes
    this.combatSystem.activeAttacks = [];
    this.particleSystem.clear();
    
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
    const deltaTime = Math.min((time - this.lastTime) / 1000, 0.05); // clamp dt
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

    // Combat system processes hits AND applies physics velocity/friction
    const allCombatants = [this.player, ...this.entities];
    this.combatSystem.update(dt, allCombatants, this.tileMap);
    
    this.particleSystem.update(dt);

    // Environmental particles
    this._spawnEnvParticles(dt);

    // Camera targets player center (pass dt for screen shake)
    this.camera.update(this.player.x + this.player.width/2, this.player.y + this.player.height/2, dt);
    
    // Update player point light
    this.dayNight.updatePlayerLight(this.player);
    
    this.hud.update(this);

    // Check Loss conditions
    if (this.player.hp <= 0 || this.player.isDead) {
      this.state = GAME_STATES.GAME_OVER;
      document.getElementById('game-over-screen').classList.add('visible');
      document.getElementById('hud-layer').style.display = 'none';
    }

    // Check Win conditions
    const boss = this.entities.find(e => (e.subType && e.subType.startsWith('boss_')) || e instanceof BossAldric);
    if (boss && boss.isDead) {
      const bossObjective = this.objectives.find(o => o.id.startsWith('slay_') || o.id === 'assassinate_aldric');
      if (bossObjective) {
        this.completeObjective(bossObjective.id);
      }
    }

    const allRequiredCompleted = this.objectives && this.objectives.filter(o => o.required).every(o => o.completed);
    if (allRequiredCompleted) {
      this.state = GAME_STATES.VICTORY;
      document.getElementById('victory-screen').classList.add('visible');
      document.getElementById('hud-layer').style.display = 'none';
      
      const nextBtn = document.getElementById('victory-retry-btn');
      if (nextBtn) {
        nextBtn.innerText = this.currentLevelId < 5 ? "Next Level" : "Start Anew";
      }
    }
  }

  _spawnEnvParticles(dt) {
    this.envParticleTimer -= dt;
    if (this.envParticleTimer > 0) return;
    this.envParticleTimer = 0.5; // spawn batch every 0.5s

    const theme = ThemeManager.getTheme(this.currentThemeId);
    const envType = theme.envParticles.type;
    
    // Map theme particle type to our particle system types
    const typeMap = {
      rain: null, // rain handled by 2D canvas overlay
      dust: 'dust',
      snow: 'snow',
      embers: 'embers',
      void: 'void',
    };

    const particleType = typeMap[envType];
    if (!particleType) return;

    // Spawn around player
    const px = this.player.x + (Math.random() - 0.5) * 200;
    const py = this.player.y + (Math.random() - 0.5) * 200;
    this.particleSystem.spawn(px, py, particleType, 2);
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
