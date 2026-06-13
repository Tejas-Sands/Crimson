import * as THREE from 'three';
import { GAME, PLAYER, COMBAT, TILE_TYPES } from '../data/constants.js';
import { Combat } from '../systems/Combat.js';

export class Player {
  constructor(x, y, scene, assetGen) {
    this.x = x;
    this.y = y;
    this.width = 16;
    this.height = 16;
    
    this.hp = PLAYER.START_HP;
    this.blood = 50;
    this.isStarving = false;
    
    this.facing = 1;
    this.facingAngle = Math.PI / 2;
    this.hasKey = false;
    this.isStealthHidden = false;
    this.nearLoreNode = null;
    this.stealthAssassinations = 0;
    
    // Physics velocity
    this.vx = 0;
    this.vy = 0;
    this.mass = PLAYER.MASS;
    
    // Stagger
    this.isStaggered = false;
    this.staggerTimer = 0;
    
    // Dodge
    this.isDodging = false;
    this.dodgeTimer = 0;
    this.dodgeCooldown = 0;
    this.dodgeDirX = 0;
    this.dodgeDirY = 0;
    
    this.isInvincible = false;
    this.invincibilityTimer = 0;
    
    // Combo system
    this.comboStep = 0; // 0=idle, 1-3=combo chain
    this.comboTimer = 0; // time left to chain next hit
    this.attackCooldown = 0;
    this.isAttacking = false;
    this.attackTimer = 0;
    this.attackRecovery = 0; // can't dodge during recovery
    this.attackCommitted = false; // can't turn mid-swing
    this.inputBuffer = null;
    this.hitComboCount = 0;
    this.hitComboTimer = 0;
    
    // 3D Model
    this.sprite = new THREE.Group();
    
    // Humanoid
    this.humanoidGroup = new THREE.Group();
    this.sprite.add(this.humanoidGroup);

    const torsoGeo = new THREE.BoxGeometry(6, 7, 4);
    const torsoMat = new THREE.MeshLambertMaterial({ color: 0x0a0a0c });
    this.torso = new THREE.Mesh(torsoGeo, torsoMat);
    this.torso.position.set(0, 8.5, 0);
    this.torso.castShadow = true;
    this.torso.receiveShadow = true;
    this.humanoidGroup.add(this.torso);

    const amuletGeo = new THREE.BoxGeometry(1.5, 2.5, 1);
    const amuletMat = new THREE.MeshBasicMaterial({ color: 0xff1122 });
    this.amulet = new THREE.Mesh(amuletGeo, amuletMat);
    this.amulet.position.set(0, 1.0, 2.1);
    this.torso.add(this.amulet);

    const capeGeo = new THREE.BoxGeometry(7.5, 10, 0.6);
    const capeMat = new THREE.MeshLambertMaterial({ color: 0x050505 });
    this.cape = new THREE.Mesh(capeGeo, capeMat);
    this.cape.position.set(0, 8.0, -2.4);
    this.cape.castShadow = true;
    this.cape.receiveShadow = true;
    this.humanoidGroup.add(this.cape);

    const capeInnerGeo = new THREE.BoxGeometry(7.3, 9.8, 0.2);
    const capeInnerMat = new THREE.MeshLambertMaterial({ color: 0xd81b2a });
    this.capeInner = new THREE.Mesh(capeInnerGeo, capeInnerMat);
    this.capeInner.position.set(0, -0.1, 0.4);
    this.cape.add(this.capeInner);

    const collarGeo = new THREE.ConeGeometry(2.5, 6, 3);
    const collarMat = new THREE.MeshLambertMaterial({ color: 0xd81b2a });
    this.leftCollar = new THREE.Mesh(collarGeo, collarMat);
    this.leftCollar.position.set(-3.2, 3.5, 1.0);
    this.leftCollar.rotation.z = -Math.PI / 6;
    this.leftCollar.rotation.x = -Math.PI / 8;
    this.cape.add(this.leftCollar);

    this.rightCollar = new THREE.Mesh(collarGeo, collarMat);
    this.rightCollar.position.set(3.2, 3.5, 1.0);
    this.rightCollar.rotation.z = Math.PI / 6;
    this.rightCollar.rotation.x = -Math.PI / 8;
    this.cape.add(this.rightCollar);

    const headGeo = new THREE.BoxGeometry(4.5, 4.5, 4.5);
    const headMat = new THREE.MeshLambertMaterial({ color: 0xf0f0f5 });
    this.head = new THREE.Mesh(headGeo, headMat);
    this.head.position.set(0, 14.25, 0.5);
    this.head.castShadow = true;
    this.head.receiveShadow = true;
    this.humanoidGroup.add(this.head);

    const humanEyeGeo = new THREE.BoxGeometry(0.8, 0.4, 0.2);
    const humanEyeMat = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    this.humanLeftEye = new THREE.Mesh(humanEyeGeo, humanEyeMat);
    this.humanLeftEye.position.set(-1.0, 0.5, 2.3);
    this.head.add(this.humanLeftEye);
    this.humanRightEye = new THREE.Mesh(humanEyeGeo, humanEyeMat);
    this.humanRightEye.position.set(1.0, 0.5, 2.3);
    this.head.add(this.humanRightEye);

    const fangGeo = new THREE.BoxGeometry(0.6, 1.0, 0.4);
    const fangMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    this.leftFang = new THREE.Mesh(fangGeo, fangMat);
    this.leftFang.position.set(-1.0, -1.2, 2.3);
    this.leftFang.visible = false;
    this.head.add(this.leftFang);
    this.rightFang = new THREE.Mesh(fangGeo, fangMat);
    this.rightFang.position.set(1.0, -1.2, 2.3);
    this.rightFang.visible = false;
    this.head.add(this.rightFang);

    const hairGeo = new THREE.BoxGeometry(5.0, 1.5, 5.2);
    const hairMat = new THREE.MeshLambertMaterial({ color: 0x050505 });
    this.hair = new THREE.Mesh(hairGeo, hairMat);
    this.hair.position.set(0, 2.5, -0.4);
    this.head.add(this.hair);
    const peakGeo = new THREE.BoxGeometry(2.0, 1.0, 1.0);
    this.hairPeak = new THREE.Mesh(peakGeo, hairMat);
    this.hairPeak.position.set(0, -0.5, 2.5);
    this.hair.add(this.hairPeak);

    const armGeo = new THREE.BoxGeometry(1.8, 6, 1.8);
    const armMat = new THREE.MeshLambertMaterial({ color: 0x0a0a0c });
    this.leftArm = new THREE.Mesh(armGeo, armMat);
    this.leftArm.position.set(-4.2, 9.0, 0);
    this.leftArm.castShadow = true;
    this.leftArm.receiveShadow = true;
    this.humanoidGroup.add(this.leftArm);
    this.rightArm = new THREE.Mesh(armGeo, armMat);
    this.rightArm.position.set(4.2, 9.0, 0);
    this.rightArm.castShadow = true;
    this.rightArm.receiveShadow = true;
    this.humanoidGroup.add(this.rightArm);

    const pauldronGeo = new THREE.BoxGeometry(2.4, 1.5, 2.4);
    const pauldronMat = new THREE.MeshLambertMaterial({ color: 0x8c8c96 });
    this.leftPauldron = new THREE.Mesh(pauldronGeo, pauldronMat);
    this.leftPauldron.position.set(0, 3.2, 0);
    this.leftArm.add(this.leftPauldron);
    this.rightPauldron = new THREE.Mesh(pauldronGeo, pauldronMat);
    this.rightPauldron.position.set(0, 3.2, 0);
    this.rightArm.add(this.rightPauldron);

    const clawGeo = new THREE.BoxGeometry(1.2, 1.5, 1.2);
    const clawMat = new THREE.MeshLambertMaterial({ color: 0x110000 });
    this.leftClaw = new THREE.Mesh(clawGeo, clawMat);
    this.leftClaw.position.set(0, -3.5, 0);
    this.leftArm.add(this.leftClaw);
    this.rightClaw = new THREE.Mesh(clawGeo, clawMat);
    this.rightClaw.position.set(0, -3.5, 0);
    this.rightArm.add(this.rightClaw);

    const bladeGeo = new THREE.BoxGeometry(0.6, 5, 0.6);
    const bladeMat = new THREE.MeshBasicMaterial({ color: 0xff1122 });
    this.blade = new THREE.Mesh(bladeGeo, bladeMat);
    this.blade.position.set(0, -3.5, 1.5);
    this.blade.rotation.x = Math.PI / 2;
    this.rightArm.add(this.blade);

    const hiltGeo = new THREE.BoxGeometry(1.6, 0.4, 0.4);
    const hiltMat = new THREE.MeshLambertMaterial({ color: 0x8c8c96 });
    this.hilt = new THREE.Mesh(hiltGeo, hiltMat);
    this.hilt.position.set(0, -1.2, 0.3);
    this.rightArm.add(this.hilt);

    const legGeo = new THREE.BoxGeometry(2.2, 5.5, 2.2);
    const legMat = new THREE.MeshLambertMaterial({ color: 0x0a0a0c });
    this.leftLeg = new THREE.Mesh(legGeo, legMat);
    this.leftLeg.position.set(-1.4, 2.75, 0);
    this.leftLeg.castShadow = true;
    this.leftLeg.receiveShadow = true;
    this.humanoidGroup.add(this.leftLeg);
    this.rightLeg = new THREE.Mesh(legGeo, legMat);
    this.rightLeg.position.set(1.4, 2.75, 0);
    this.rightLeg.castShadow = true;
    this.rightLeg.receiveShadow = true;
    this.humanoidGroup.add(this.rightLeg);

    // Bat Form
    this.batGroup = new THREE.Group();
    this.batGroup.visible = false;
    this.sprite.add(this.batGroup);

    const batTorsoGeo = new THREE.BoxGeometry(4, 3, 5);
    const batTorsoMat = new THREE.MeshLambertMaterial({ color: 0x1a1a1c });
    this.batTorso = new THREE.Mesh(batTorsoGeo, batTorsoMat);
    this.batTorso.position.set(0, 8, 0);
    this.batTorso.castShadow = true;
    this.batGroup.add(this.batTorso);

    const batHeadGeo = new THREE.BoxGeometry(2.5, 2.5, 2.5);
    const batHeadMat = new THREE.MeshLambertMaterial({ color: 0x121214 });
    this.batHead = new THREE.Mesh(batHeadGeo, batHeadMat);
    this.batHead.position.set(0, 8.5, 2.5);
    this.batHead.castShadow = true;
    this.batGroup.add(this.batHead);

    const eyeGeo = new THREE.BoxGeometry(0.4, 0.4, 0.4);
    const eyeMat = new THREE.MeshBasicMaterial({ color: 0xe74c3c });
    this.leftEye = new THREE.Mesh(eyeGeo, eyeMat);
    this.leftEye.position.set(-0.6, 0.4, 1.3);
    this.batHead.add(this.leftEye);
    this.rightEye = new THREE.Mesh(eyeGeo, eyeMat);
    this.rightEye.position.set(0.6, 0.4, 1.3);
    this.batHead.add(this.rightEye);

    const wingGeo = new THREE.BoxGeometry(6, 0.4, 2.5);
    const wingMat = new THREE.MeshLambertMaterial({ color: 0x0c0c0e });
    this.leftWing = new THREE.Mesh(wingGeo, wingMat);
    this.leftWing.position.set(-4.5, 8.2, 0);
    this.leftWing.castShadow = true;
    this.batGroup.add(this.leftWing);
    this.rightWing = new THREE.Mesh(wingGeo, wingMat);
    this.rightWing.position.set(4.5, 8.2, 0);
    this.rightWing.castShadow = true;
    this.batGroup.add(this.rightWing);

    this.sprite.position.set(this.x, 0, this.y);
    scene.add(this.sprite);
  }

  update(dt, input, tileMap, combatSystem) {
    if (!input.mouse.clicked) {
      this.input_mouse_consumed = false;
    }
    // Stagger — can't act
    if (this.isStaggered) {
      // Recoil animation
      const wobble = Math.sin(Date.now() / 50) * 0.15;
      this.humanoidGroup.rotation.z = wobble;
      this.sprite.position.x = this.x;
      this.sprite.position.z = this.y;
      return;
    }
    this.humanoidGroup.rotation.z = 0;

    // Update tile-based interactions (stealth bush, key pickup, locked doors)
    const ts = GAME.TILE_SIZE;
    const pCol = Math.floor((this.x + this.width/2) / ts);
    const pRow = Math.floor((this.y + this.height/2) / ts);
    const objLayer = tileMap.layers[1];
    const standingTile = objLayer ? objLayer[pRow * tileMap.width + pCol] : null;

    // Bush stealth check
    this.isStealthHidden = (standingTile === TILE_TYPES.BUSH && !this.isBatForm);

    // Automatic key pickup
    if (standingTile === TILE_TYPES.KEY) {
      tileMap.removeKey(pCol, pRow);
      this.hasKey = true;
      if (window.game && window.game.onKeyPickedUp) {
        window.game.onKeyPickedUp();
      }
    }

    // Interactive lore node check
    let nearLore = null;
    const checkOffsets = [
      {dx: 0, dy: 0}, {dx: 1, dy: 0}, {dx: -1, dy: 0},
      {dx: 0, dy: 1}, {dx: 0, dy: -1}
    ];
    for (let offset of checkOffsets) {
      const col = pCol + offset.dx;
      const row = pRow + offset.dy;
      if (col >= 0 && col < tileMap.width && row >= 0 && row < tileMap.height) {
        const tile = objLayer ? objLayer[row * tileMap.width + col] : null;
        if (tile === TILE_TYPES.LORE_NODE) {
          nearLore = { col, row };
          break;
        }
      }
    }
    this.nearLoreNode = nearLore;

    if (this.nearLoreNode && input.isJustPressed('KeyE')) {
      if (window.game && window.game.readLoreNode) {
        window.game.readLoreNode(this.nearLoreNode.col, this.nearLoreNode.row);
      }
    }

    // Door unlocking
    let adjacentDoor = null;
    for (let offset of checkOffsets) {
      const col = pCol + offset.dx;
      const row = pRow + offset.dy;
      if (col >= 0 && col < tileMap.width && row >= 0 && row < tileMap.height) {
        const tile = objLayer ? objLayer[row * tileMap.width + col] : null;
        if (tile === TILE_TYPES.DOOR) {
          adjacentDoor = { col, row };
          break;
        }
      }
    }
    if (adjacentDoor && this.hasKey) {
      tileMap.unlockDoor(adjacentDoor.col, adjacentDoor.row);
      this.hasKey = false;
      if (window.game && window.game.onDoorUnlocked) {
        window.game.onDoorUnlocked(adjacentDoor.col, adjacentDoor.row);
      }
    }

    // Timers
    if (this.dodgeCooldown > 0) this.dodgeCooldown -= dt * 1000;
    if (this.attackCooldown > 0) this.attackCooldown -= dt * 1000;
    if (this.attackRecovery > 0) this.attackRecovery -= dt * 1000;
    
    if (this.invincibilityTimer > 0) {
      this.invincibilityTimer -= dt * 1000;
      if (this.invincibilityTimer <= 0) this.isInvincible = false;
    }

    // Combo timer
    if (this.comboTimer > 0) {
      this.comboTimer -= dt * 1000;
      if (this.comboTimer <= 0) {
        this.comboStep = 0;
      }
    }

    // Hit combo timer
    if (this.hitComboTimer > 0) {
      this.hitComboTimer -= dt;
      if (this.hitComboTimer <= 0) {
        this.hitComboCount = 0;
      }
    }
    
    if (this.isAttacking) {
      this.attackTimer -= dt * 1000;
      if (this.attackTimer <= 0) {
        this.isAttacking = false;
        this.attackCommitted = false;
        // Set recovery based on combo step
        if (this.comboStep === 3) {
          this.attackRecovery = COMBAT.COMBO_3_RECOVERY_MS;
          this.comboStep = 0;
          this.comboTimer = 0;
        } else if (this.comboStep === 2) {
          this.attackRecovery = COMBAT.COMBO_2_RECOVERY_MS;
        } else {
          this.attackRecovery = COMBAT.COMBO_1_RECOVERY_MS;
        }
      }
    }

    // Dodge roll
    if (this.isDodging) {
      this.dodgeTimer -= dt * 1000;
      if (this.dodgeTimer <= 0) {
        this.isDodging = false;
        this.isInvincible = false;
      } else {
        // Dodge uses velocity impulse (already applied), just update position
        this.sprite.position.x = this.x;
        this.sprite.position.z = this.y;
        // Spin animation
        this.humanoidGroup.rotation.y += dt * 20;
        return;
      }
    }
    this.humanoidGroup.rotation.y = 0;

    let dx = 0, dy = 0;
    if (input.isDown('KeyW')) dy -= 1;
    if (input.isDown('KeyS')) dy += 1;
    if (input.isDown('KeyA')) dx -= 1;
    if (input.isDown('KeyD')) dx += 1;

    if (dx !== 0 && dy !== 0) {
      const length = Math.sqrt(dx*dx + dy*dy);
      dx /= length;
      dy /= length;
    }

    // Facing (not during attack commitment)
    if (!this.attackCommitted) {
      if (dx !== 0 || dy !== 0) {
        this.facingAngle = Math.atan2(dy, dx);
        if (dx > 0) this.facing = 0;
        else if (dx < 0) this.facing = 2;
        else if (dy > 0) this.facing = 1;
        else if (dy < 0) this.facing = 3;
      }
    }

    // Update existing buffer timer
    if (this.inputBuffer) {
      this.inputBuffer.timer -= dt * 1000;
      if (this.inputBuffer.timer <= 0) {
        this.inputBuffer = null;
      }
    }

    // Capture new inputs to buffer
    const isMouseClick = input.mouse.clicked && !this.input_mouse_consumed;
    if (input.isJustPressed('KeyK')) {
      this.inputBuffer = { type: 'dodge', timer: 200 };
    } else if (input.isJustPressed('KeyJ') || isMouseClick) {
      this.inputBuffer = { type: 'attack', timer: 200, isMouse: isMouseClick };
      if (isMouseClick) {
        this.input_mouse_consumed = true;
      }
    }

    // Try to execute buffered actions
    if (this.inputBuffer) {
      if (this.inputBuffer.type === 'dodge' && this.dodgeCooldown <= 0 && this.attackRecovery <= 0 && !this.isDodging) {
        this.inputBuffer = null;
        this.isDodging = true;
        this.dodgeTimer = PLAYER.DODGE_I_FRAMES * 16.6;
        this.dodgeCooldown = PLAYER.DODGE_COOLDOWN_MS;
        this.isInvincible = true;
        
        let ddx = dx, ddy = dy;
        if (ddx === 0 && ddy === 0) {
          if (this.facing === 0) ddx = 1;
          if (this.facing === 1) ddy = 1;
          if (this.facing === 2) ddx = -1;
          if (this.facing === 3) ddy = -1;
        }
        this.vx = ddx * PLAYER.DODGE_IMPULSE;
        this.vy = ddy * PLAYER.DODGE_IMPULSE;
        return;
      }
      
      if (this.inputBuffer.type === 'attack' && this.attackCooldown <= 0 && !this.isDodging && !this.isAttacking) {
        const isMouse = this.inputBuffer.isMouse;
        this.inputBuffer = null;
        
        if (isMouse) {
          const mx = input.mouse.x - window.innerWidth / 2;
          const my = input.mouse.y - window.innerHeight / 2;
          this.facingAngle = Math.atan2(my, mx);
          
          const pi = Math.PI;
          if (this.facingAngle > -pi/4 && this.facingAngle <= pi/4) this.facing = 0;
          else if (this.facingAngle > pi/4 && this.facingAngle <= 3*pi/4) this.facing = 1;
          else if (this.facingAngle > 3*pi/4 || this.facingAngle <= -3*pi/4) this.facing = 2;
          else this.facing = 3;
        }

        // Advance combo
        if (this.comboStep < 3 && this.comboTimer > 0) {
          this.comboStep++;
        } else {
          this.comboStep = 1;
        }

        this.isAttacking = true;
        this.attackCommitted = true;
        
        const durations = [0, 180, 220, 320];
        this.attackTimer = durations[this.comboStep];
        this.attackCooldown = this.comboStep === 3 ? COMBAT.SLASH_CD_MS * 1.5 : COMBAT.SLASH_CD_MS;
        this.comboTimer = COMBAT.COMBO_WINDOW_MS;
        
        if (combatSystem) {
          combatSystem.activeAttacks.push(
            Combat.createMeleeHitbox(this, 'slash', this.comboStep)
          );
        }
      }
    }

    // Heal/Feed (Press H to consume 20 blood and heal 20 HP)
    if (input.isJustPressed('KeyH') && this.blood >= 20 && this.hp < PLAYER.START_HP && !this.isDead) {
      this.blood = Math.max(0, this.blood - 20);
      this.hp = Math.min(PLAYER.START_HP, this.hp + 20);
      if (combatSystem && combatSystem.particleSystem) {
        combatSystem.particleSystem.spawn(this.x + this.width/2, this.y + this.height/2, 'blood', 12);
      }
    }

    // Speed
    let speedMultiplier = input.isDown('ShiftLeft') ? PLAYER.RUN_SPEED : PLAYER.WALK_SPEED;
    
    if (this.isBatForm) {
      speedMultiplier = PLAYER.BAT_SPEED;
      this.humanoidGroup.visible = false;
      this.batGroup.visible = true;
      const batBob = Math.sin(Date.now() / 150) * 1.5;
      this.sprite.position.y = 10 + batBob;
      const wingFlap = Math.sin(Date.now() / 80) * 0.8;
      this.leftWing.rotation.z = wingFlap;
      this.rightWing.rotation.z = -wingFlap;
    } else {
      if (this.isStarving) speedMultiplier *= 0.7;
      this.humanoidGroup.visible = true;
      this.batGroup.visible = false;
      this.sprite.position.y = 0;
      
      if (this.isAttacking) {
        this.leftFang.visible = true;
        this.rightFang.visible = true;
        const maxDur = [0, 180, 220, 320][this.comboStep];
        const progress = (maxDur - this.attackTimer) / maxDur;
        
        // Different swing for each combo hit
        if (this.comboStep === 1) {
          // Quick right slash
          this.rightArm.rotation.x = -Math.PI / 3 + progress * (Math.PI + Math.PI / 3);
          this.rightArm.rotation.y = -Math.sin(progress * Math.PI) * 0.5;
        } else if (this.comboStep === 2) {
          // Left-to-right wide swing
          this.rightArm.rotation.x = -Math.PI / 2 + progress * Math.PI;
          this.rightArm.rotation.y = -0.8 + progress * 1.6;
          this.torso.rotation.y = Math.sin(progress * Math.PI) * 0.3;
        } else {
          // Heavy overhead finisher
          this.rightArm.rotation.x = -Math.PI + progress * (Math.PI * 1.5);
          this.rightArm.rotation.y = 0;
          this.torso.rotation.x = Math.sin(progress * Math.PI) * 0.2;
          // Lean forward
          this.humanoidGroup.position.z = Math.sin(progress * Math.PI) * 2;
        }
      } else {
        this.leftFang.visible = false;
        this.rightFang.visible = false;
        this.torso.rotation.y = 0;
        this.torso.rotation.x = 0;
        this.humanoidGroup.position.z = 0;
        
        if (dx !== 0 || dy !== 0) {
          const time = Date.now() / 100;
          const speedFactor = input.isDown('ShiftLeft') ? 1.5 : 1.0;
          this.rightArm.rotation.x = Math.sin(time * speedFactor) * 0.5;
          this.rightArm.rotation.y = 0;
        } else {
          this.rightArm.rotation.x *= 0.8;
          this.rightArm.rotation.y *= 0.8;
        }
      }

      if (dx !== 0 || dy !== 0) {
        const time = Date.now() / 100;
        const speedFactor = input.isDown('ShiftLeft') ? 1.5 : 1.0;
        this.leftLeg.rotation.x = Math.sin(time * speedFactor) * 0.8;
        this.rightLeg.rotation.x = -Math.sin(time * speedFactor) * 0.8;
        this.leftArm.rotation.x = -Math.sin(time * speedFactor) * 0.6;
        this.cape.rotation.x = 0.2 + Math.abs(Math.sin(time)) * 0.25;
      } else {
        this.leftLeg.rotation.x *= 0.8;
        this.rightLeg.rotation.x *= 0.8;
        this.leftArm.rotation.x *= 0.8;
        const bob = Math.sin(Date.now() / 300) * 0.1;
        this.head.position.y = 13.25 + bob;
        this.torso.position.y = 8 + bob * 0.5;
        this.leftArm.position.y = 8.5 + bob * 0.5;
        this.rightArm.position.y = 8.5 + bob * 0.5;
        this.cape.rotation.x = 0.05 + Math.sin(Date.now() / 400) * 0.05;
      }
    }

    // Rotation (continuous 360-degree based on facingAngle)
    const targetAngle = Math.PI / 2 - this.facingAngle;
    
    let angleDiff = targetAngle - this.sprite.rotation.y;
    angleDiff = Math.atan2(Math.sin(angleDiff), Math.cos(angleDiff));
    this.sprite.rotation.y += angleDiff * 15 * dt;

    // Opacity
    let opacity = 1.0;
    if (this.isInvincible && !this.isDodging) {
      opacity = (Math.floor(Date.now() / 100) % 2 === 0) ? 0.3 : 1.0;
    } else if (this.isDodging) {
      opacity = 0.5;
    } else if (this.isStealthHidden) {
      opacity = 0.4;
    }
    this.setOpacity(opacity);

    this.move(dx, dy, speedMultiplier, dt, tileMap);
  }

  setOpacity(opacity) {
    this.sprite.traverse(child => {
      if (child.isMesh) {
        child.material.transparent = opacity < 1.0;
        child.material.opacity = opacity;
      }
    });
  }

  checkTileCollision(px, py, tileMap) {
    const ts = GAME.TILE_SIZE;
    const startCol = Math.floor(px / ts);
    const endCol = Math.floor((px + this.width - 0.1) / ts);
    const startRow = Math.floor(py / ts);
    const endRow = Math.floor((py + this.height - 0.1) / ts);
    
    for (let r = startRow; r <= endRow; r++) {
      for (let c = startCol; c <= endCol; c++) {
        if (tileMap.isSolid(c, r)) {
          return true;
        }
      }
    }
    return false;
  }

  move(dx, dy, speedMult, dt, tileMap) {
    if (dx === 0 && dy === 0) return;
    const speed = speedMult * GAME.TILE_SIZE;
    
    // Check X movement first
    const nextX = this.x + dx * speed * dt;
    if (!this.checkTileCollision(nextX, this.y, tileMap)) {
      this.x = nextX;
    }
    
    // Check Y movement next
    const nextY = this.y + dy * speed * dt;
    if (!this.checkTileCollision(this.x, nextY, tileMap)) {
      this.y = nextY;
    }
    
    this.sprite.position.x = this.x;
    this.sprite.position.z = this.y;
  }
}
