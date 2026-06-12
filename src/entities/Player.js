import * as THREE from 'three';
import { GAME, PLAYER, COMBAT } from '../data/constants.js';
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
    
    this.facing = 1; // 0=right, 1=down, 2=left, 3=up
    
    this.isDodging = false;
    this.dodgeTimer = 0;
    this.dodgeCooldown = 0;
    this.dodgeDirX = 0;
    this.dodgeDirY = 0;
    
    this.isInvincible = false;
    this.invincibilityTimer = 0;
    
    this.attackCooldown = 0;
    this.isAttacking = false;
    this.attackTimer = 0;
    
    // Three.js 3D Model Group (Procedural Vampire Voxel representation)
    this.sprite = new THREE.Group();
    
    // 1. Humanoid Subgroup
    this.humanoidGroup = new THREE.Group();
    this.sprite.add(this.humanoidGroup);

    // Torso (dark charcoal vestments)
    const torsoGeo = new THREE.BoxGeometry(6, 6, 4);
    const torsoMat = new THREE.MeshLambertMaterial({ color: 0x1a1a1c });
    this.torso = new THREE.Mesh(torsoGeo, torsoMat);
    this.torso.position.set(0, 8, 0);
    this.torso.castShadow = true;
    this.torso.receiveShadow = true;
    this.humanoidGroup.add(this.torso);

    // Cape (flowing crimson red)
    const capeGeo = new THREE.BoxGeometry(7, 9, 0.8);
    const capeMat = new THREE.MeshLambertMaterial({ color: 0xe74c3c });
    this.cape = new THREE.Mesh(capeGeo, capeMat);
    this.cape.position.set(0, 7.5, -2.4);
    this.cape.castShadow = true;
    this.cape.receiveShadow = true;
    this.humanoidGroup.add(this.cape);

    // Head (pale gothic silver-gray skin)
    const headGeo = new THREE.BoxGeometry(4.5, 4.5, 4.5);
    const headMat = new THREE.MeshLambertMaterial({ color: 0xe0e0e5 });
    this.head = new THREE.Mesh(headGeo, headMat);
    this.head.position.set(0, 13.25, 0);
    this.head.castShadow = true;
    this.head.receiveShadow = true;
    this.humanoidGroup.add(this.head);

    // Fangs (sharp white basic meshes attached to head)
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

    // Dark gothic collar / hair
    const hairGeo = new THREE.BoxGeometry(5.0, 1.5, 5.0);
    const hairMat = new THREE.MeshLambertMaterial({ color: 0x08080a });
    this.hair = new THREE.Mesh(hairGeo, hairMat);
    this.hair.position.set(0, 2.0, -0.2);
    this.head.add(this.hair);

    // Arms
    const armGeo = new THREE.BoxGeometry(1.8, 6, 1.8);
    const armMat = new THREE.MeshLambertMaterial({ color: 0x121214 });
    
    this.leftArm = new THREE.Mesh(armGeo, armMat);
    this.leftArm.position.set(-3.9, 8.5, 0);
    this.leftArm.castShadow = true;
    this.leftArm.receiveShadow = true;
    this.humanoidGroup.add(this.leftArm);

    this.rightArm = new THREE.Mesh(armGeo, armMat);
    this.rightArm.position.set(3.9, 8.5, 0);
    this.rightArm.castShadow = true;
    this.rightArm.receiveShadow = true;
    this.humanoidGroup.add(this.rightArm);

    // Weapon: Crimson Saber attached to right hand
    const bladeGeo = new THREE.BoxGeometry(0.6, 5, 0.6);
    const bladeMat = new THREE.MeshBasicMaterial({ color: 0xe74c3c }); // glowing crimson
    this.blade = new THREE.Mesh(bladeGeo, bladeMat);
    this.blade.position.set(0, -3.0, 1.5);
    this.blade.rotation.x = Math.PI / 2; // points forward
    this.rightArm.add(this.blade);

    const hiltGeo = new THREE.BoxGeometry(1.6, 0.4, 0.4);
    const hiltMat = new THREE.MeshLambertMaterial({ color: 0x333333 });
    this.hilt = new THREE.Mesh(hiltGeo, hiltMat);
    this.hilt.position.set(0, -1.2, 0.3);
    this.rightArm.add(this.hilt);

    // Legs
    const legGeo = new THREE.BoxGeometry(2.2, 5, 2.2);
    const legMat = new THREE.MeshLambertMaterial({ color: 0x121214 });

    this.leftLeg = new THREE.Mesh(legGeo, legMat);
    this.leftLeg.position.set(-1.3, 2.5, 0);
    this.leftLeg.castShadow = true;
    this.leftLeg.receiveShadow = true;
    this.humanoidGroup.add(this.leftLeg);

    this.rightLeg = new THREE.Mesh(legGeo, legMat);
    this.rightLeg.position.set(1.3, 2.5, 0);
    this.rightLeg.castShadow = true;
    this.rightLeg.receiveShadow = true;
    this.humanoidGroup.add(this.rightLeg);

    // 2. Bat Subgroup (Bat form)
    this.batGroup = new THREE.Group();
    this.batGroup.visible = false;
    this.sprite.add(this.batGroup);

    // Bat Torso
    const batTorsoGeo = new THREE.BoxGeometry(4, 3, 5);
    const batTorsoMat = new THREE.MeshLambertMaterial({ color: 0x1a1a1c });
    this.batTorso = new THREE.Mesh(batTorsoGeo, batTorsoMat);
    this.batTorso.position.set(0, 8, 0);
    this.batTorso.castShadow = true;
    this.batGroup.add(this.batTorso);

    // Bat Head
    const batHeadGeo = new THREE.BoxGeometry(2.5, 2.5, 2.5);
    const batHeadMat = new THREE.MeshLambertMaterial({ color: 0x121214 });
    this.batHead = new THREE.Mesh(batHeadGeo, batHeadMat);
    this.batHead.position.set(0, 8.5, 2.5);
    this.batHead.castShadow = true;
    this.batGroup.add(this.batHead);

    // Bat Glowing Red Eyes
    const eyeGeo = new THREE.BoxGeometry(0.4, 0.4, 0.4);
    const eyeMat = new THREE.MeshBasicMaterial({ color: 0xe74c3c });
    this.leftEye = new THREE.Mesh(eyeGeo, eyeMat);
    this.leftEye.position.set(-0.6, 0.4, 1.3);
    this.batHead.add(this.leftEye);

    this.rightEye = new THREE.Mesh(eyeGeo, eyeMat);
    this.rightEye.position.set(0.6, 0.4, 1.3);
    this.batHead.add(this.rightEye);

    // Bat Wings (w/ pivots for flapping)
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

    // Position: 2D (x, y) maps to 3D (x, 0, z)
    this.sprite.position.set(this.x, 0, this.y);
    scene.add(this.sprite);
  }

  update(dt, input, tileMap, combatSystem) {
    // Timers
    if (this.dodgeCooldown > 0) this.dodgeCooldown -= dt * 1000;
    if (this.attackCooldown > 0) this.attackCooldown -= dt * 1000;
    
    if (this.invincibilityTimer > 0) {
      this.invincibilityTimer -= dt * 1000;
      if (this.invincibilityTimer <= 0) this.isInvincible = false;
    }
    
    if (this.isAttacking) {
      this.attackTimer -= dt * 1000;
      if (this.attackTimer <= 0) {
        this.isAttacking = false;
      }
    }

    // Dodge logic
    if (this.isDodging) {
      this.dodgeTimer -= dt * 1000;
      if (this.dodgeTimer <= 0) {
        this.isDodging = false;
        this.isInvincible = false;
      } else {
        // Apply dodge movement
        this.move(this.dodgeDirX, this.dodgeDirY, PLAYER.RUN_SPEED * 1.5, dt, tileMap);
        return; // Skip normal input during dodge
      }
    }

    let dx = 0;
    let dy = 0;
    if (input.isDown('KeyW')) dy -= 1;
    if (input.isDown('KeyS')) dy += 1;
    if (input.isDown('KeyA')) dx -= 1;
    if (input.isDown('KeyD')) dx += 1;

    // Normalize
    if (dx !== 0 && dy !== 0) {
      const length = Math.sqrt(dx*dx + dy*dy);
      dx /= length;
      dy /= length;
    }

    // Facing direction
    if (dx > 0) this.facing = 0;
    else if (dx < 0) this.facing = 2;
    else if (dy > 0) this.facing = 1;
    else if (dy < 0) this.facing = 3;

    // Dodge Initiation
    if (input.isJustPressed('KeyK') && this.dodgeCooldown <= 0) {
      this.isDodging = true;
      // Dodge duration approx based on i-frames (60fps = ~16.6ms per frame)
      this.dodgeTimer = PLAYER.DODGE_I_FRAMES * 16.6; 
      this.dodgeCooldown = PLAYER.DODGE_COOLDOWN_MS;
      this.isInvincible = true;
      // If moving, dodge in that dir, else dodge facing dir
      if (dx === 0 && dy === 0) {
        if (this.facing === 0) dx = 1;
        if (this.facing === 1) dy = 1;
        if (this.facing === 2) dx = -1;
        if (this.facing === 3) dy = -1;
      }
      this.dodgeDirX = dx;
      this.dodgeDirY = dy;
      return;
    }

    // Attack Initiation
    if ((input.isJustPressed('KeyJ') || input.mouse.clicked) && this.attackCooldown <= 0 && !this.isDodging) {
      this.isAttacking = true;
      this.attackTimer = 200; // Animation duration
      this.attackCooldown = COMBAT.SLASH_CD_MS;
      
      // Tell combat system to spawn a hitbox
      if (combatSystem) {
        combatSystem.activeAttacks.push(
          Combat.createMeleeHitbox(this, 'slash')
        );
      }
    }

    // Run vs Walk vs Bat vs Starving
    let speedMultiplier = input.isDown('ShiftLeft') ? PLAYER.RUN_SPEED : PLAYER.WALK_SPEED;
    
    if (this.isBatForm) {
      speedMultiplier = PLAYER.BAT_SPEED;
      this.humanoidGroup.visible = false;
      this.batGroup.visible = true;
      
      // Floating bat animation
      const batBob = Math.sin(Date.now() / 150) * 1.5;
      this.sprite.position.y = 10 + batBob;
      
      // Wing flapping
      const wingFlap = Math.sin(Date.now() / 80) * 0.8;
      this.leftWing.rotation.z = wingFlap;
      this.rightWing.rotation.z = -wingFlap;
    } else {
      if (this.isStarving) speedMultiplier *= 0.7; // 30% slower when starving
      this.humanoidGroup.visible = true;
      this.batGroup.visible = false;
      this.sprite.position.y = 0; // Stand on floor
      
      // Face fangs during attacks
      if (this.isAttacking) {
        this.leftFang.visible = true;
        this.rightFang.visible = true;
        
        // Attack slash animation (right arm slashes)
        const attackProgress = (200 - this.attackTimer) / 200; // 0 to 1
        this.rightArm.rotation.x = -Math.PI / 3 + attackProgress * (Math.PI + Math.PI / 3);
        this.rightArm.rotation.y = -Math.sin(attackProgress * Math.PI) * 0.5;
      } else {
        this.leftFang.visible = false;
        this.rightFang.visible = false;
        
        // Normal arm swing or idle
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

      // Leg and left arm swing when walking
      if (dx !== 0 || dy !== 0) {
        const time = Date.now() / 100;
        const speedFactor = input.isDown('ShiftLeft') ? 1.5 : 1.0;
        this.leftLeg.rotation.x = Math.sin(time * speedFactor) * 0.8;
        this.rightLeg.rotation.x = -Math.sin(time * speedFactor) * 0.8;
        this.leftArm.rotation.x = -Math.sin(time * speedFactor) * 0.6;
        
        // Flowing cape
        this.cape.rotation.x = 0.2 + Math.abs(Math.sin(time)) * 0.25;
      } else {
        this.leftLeg.rotation.x *= 0.8;
        this.rightLeg.rotation.x *= 0.8;
        this.leftArm.rotation.x *= 0.8;
        
        // Idle bob
        const bob = Math.sin(Date.now() / 300) * 0.1;
        this.head.position.y = 13.25 + bob;
        this.torso.position.y = 8 + bob * 0.5;
        this.leftArm.position.y = 8.5 + bob * 0.5;
        this.rightArm.position.y = 8.5 + bob * 0.5;
        
        this.cape.rotation.x = 0.05 + Math.sin(Date.now() / 400) * 0.05;
      }
    }

    // Directional facing turning
    let targetAngle = this.sprite.rotation.y;
    if (this.facing === 0) targetAngle = Math.PI / 2;      // Right (facing +X)
    else if (this.facing === 2) targetAngle = -Math.PI / 2; // Left (facing -X)
    else if (this.facing === 1) targetAngle = 0;           // Down (facing +Z)
    else if (this.facing === 3) targetAngle = Math.PI;      // Up (facing -Z)
    
    let angleDiff = targetAngle - this.sprite.rotation.y;
    angleDiff = Math.atan2(Math.sin(angleDiff), Math.cos(angleDiff));
    this.sprite.rotation.y += angleDiff * 15 * dt;

    // Blinking / Opacity updates
    let opacity = 1.0;
    if (this.isInvincible && !this.isDodging) {
      opacity = (Math.floor(Date.now() / 100) % 2 === 0) ? 0.3 : 1.0;
    } else if (this.isDodging) {
      opacity = 0.5;
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

  move(dx, dy, speedMult, dt, tileMap) {
    if (dx === 0 && dy === 0) return;

    const speed = speedMult * GAME.TILE_SIZE;
    const nextX = this.x + dx * speed * dt;
    const nextY = this.y + dy * speed * dt;

    const ts = GAME.TILE_SIZE;
    const checkCol = Math.floor((nextX + this.width/2) / ts);
    const checkRow = Math.floor((nextY + this.height/2) / ts);

    if (!tileMap.isSolid(checkCol, checkRow)) {
      this.x = nextX;
      this.y = nextY;
      
      this.sprite.position.x = this.x;
      this.sprite.position.z = this.y;
    }
  }
}
