import * as THREE from 'three';
import { GAME } from '../data/constants.js';
import { distance } from '../core/Utils.js';

export class BossAldric {
  constructor(x, y, scene, assetGen) {
    this.x = x;
    this.y = y;
    this.width = 32; // 2x2 tiles
    this.height = 32;
    
    this.hp = 300;
    this.maxHp = 300;
    this.isDead = false;
    this.isInvincible = false;
    this.invincibilityTimer = 0;
    
    this.phase = 1;
    this.state = 'IDLE'; // IDLE, CHASING, ATTACKING
    
    // Attacks
    this.attackTimer = 0;
    this.attackCooldown = 3; // seconds
    this.currentAttack = null;
    
    // Specifically for Phase 2
    this.speed = 40; 
    
    // Three.js 3D Model Group (Procedural Boss Aldric Voxel representation)
    this.sprite = new THREE.Group();
    
    // Torso / clerical vestments (tall crimson-red and gold robes)
    const torsoGeo = new THREE.BoxGeometry(10, 14, 8);
    const torsoMat = new THREE.MeshLambertMaterial({ color: 0x5a1818 }); // deep velvet crimson
    this.torso = new THREE.Mesh(torsoGeo, torsoMat);
    this.torso.position.set(0, 13, 0);
    this.torso.castShadow = true;
    this.torso.receiveShadow = true;
    this.sprite.add(this.torso);

    // Gold trim overlay on the robe
    const trimGeo = new THREE.BoxGeometry(10.4, 14.2, 2);
    const trimMat = new THREE.MeshLambertMaterial({ color: 0xd4af37 }); // bright gold trim
    this.goldTrim = new THREE.Mesh(trimGeo, trimMat);
    this.goldTrim.position.set(0, 13, 3.2); // centered front
    this.sprite.add(this.goldTrim);

    // Head (pale, stern templar leader face)
    const headGeo = new THREE.BoxGeometry(7, 7, 7);
    const headMat = new THREE.MeshLambertMaterial({ color: 0xe5e5eb });
    this.head = new THREE.Mesh(headGeo, headMat);
    this.head.position.set(0, 22.5, 0);
    this.head.castShadow = true;
    this.head.receiveShadow = true;
    this.sprite.add(this.head);

    // Bishop's Tall Mitre/Pope Hat (gold and crimson)
    const hatBaseGeo = new THREE.BoxGeometry(7.2, 5, 7.2);
    const hatBaseMat = new THREE.MeshLambertMaterial({ color: 0xd4af37 }); // gold
    this.hatBase = new THREE.Mesh(hatBaseGeo, hatBaseMat);
    this.hatBase.position.set(0, 4.5, 0);
    this.head.add(this.hatBase);

    const hatPointGeo = new THREE.ConeGeometry(5, 6, 4);
    const hatPointMat = new THREE.MeshLambertMaterial({ color: 0x900000 }); // crimson peak
    this.hatPoint = new THREE.Mesh(hatPointGeo, hatPointMat);
    this.hatPoint.position.set(0, 9, 0);
    this.hatPoint.rotation.y = Math.PI / 4; // rotate cone
    this.head.add(this.hatPoint);

    // Arms
    const armGeo = new THREE.BoxGeometry(3, 11, 3);
    const armMat = new THREE.MeshLambertMaterial({ color: 0x18181a });

    this.leftArm = new THREE.Mesh(armGeo, armMat);
    this.leftArm.position.set(-6.8, 14, 0);
    this.leftArm.castShadow = true;
    this.sprite.add(this.leftArm);

    this.rightArm = new THREE.Mesh(armGeo, armMat);
    this.rightArm.position.set(6.8, 14, 0);
    this.rightArm.castShadow = true;
    this.sprite.add(this.rightArm);

    // Massive Holy Golden Scepter Staff
    const staffHandleGeo = new THREE.BoxGeometry(0.8, 20, 0.8);
    const staffHandleMat = new THREE.MeshLambertMaterial({ color: 0x333333 }); // dark steel shaft
    this.staffHandle = new THREE.Mesh(staffHandleGeo, staffHandleMat);
    this.staffHandle.position.set(0, -4.0, 3.0);
    this.staffHandle.rotation.x = Math.PI / 2; // points forward
    this.rightArm.add(this.staffHandle);

    const scepterHeadGeo = new THREE.BoxGeometry(3, 3, 3);
    const scepterHeadMat = new THREE.MeshBasicMaterial({ color: 0xffd700 }); // glowing solid gold
    this.scepterHead = new THREE.Mesh(scepterHeadGeo, scepterHeadMat);
    this.scepterHead.position.set(0, -13.0, 3.0);
    this.scepterHead.rotation.x = Math.PI / 2;
    this.rightArm.add(this.scepterHead);

    // Legs (Heavy armored boots)
    const legGeo = new THREE.BoxGeometry(3.5, 7, 3.5);
    const legMat = new THREE.MeshLambertMaterial({ color: 0x111113 });

    this.leftLeg = new THREE.Mesh(legGeo, legMat);
    this.leftLeg.position.set(-2.5, 3.5, 0);
    this.leftLeg.castShadow = true;
    this.leftLeg.receiveShadow = true;
    this.sprite.add(this.leftLeg);

    this.rightLeg = new THREE.Mesh(legGeo, legMat);
    this.rightLeg.position.set(2.5, 3.5, 0);
    this.rightLeg.castShadow = true;
    this.rightLeg.receiveShadow = true;
    this.sprite.add(this.rightLeg);

    // Position: 2D (x, y) maps to 3D (x, 0, z)
    this.sprite.position.set(this.x, 0, this.y);
    scene.add(this.sprite);
  }

  update(dt, player, tileMap, combatSystem) {
    if (this.isDead) return;

    if (this.invincibilityTimer > 0) {
      this.invincibilityTimer -= dt * 1000;
      if (this.invincibilityTimer <= 0) this.isInvincible = false;
    }

    // Phase transition
    if (this.phase === 1 && this.hp <= 150) {
      this.phase = 2;
      this.speed = 55; // 30% faster
    }

    if (this.hp <= 0) {
      this.isDead = true;
      return;
    }

    const distToPlayer = distance(this.x, this.y, player.x, player.y);
    let isMoving = false;
    let dx = 0, dy = 0;

    if (this.state === 'IDLE' || this.state === 'CHASING') {
      if (distToPlayer < GAME.TILE_SIZE * 10) {
        this.state = 'CHASING';
        
        // Attack logic
        this.attackCooldown -= dt;
        if (this.attackCooldown <= 0 && distToPlayer < GAME.TILE_SIZE * 3) {
          this.state = 'ATTACKING';
          this.attackTimer = 1.2; // Telegraph time
          this.currentAttack = 'HOLY_SMITE';
        } else {
          // Move towards player
          dx = (player.x - this.x) / distToPlayer;
          dy = (player.y - this.y) / distToPlayer;
          
          this.x += dx * this.speed * dt;
          this.y += dy * this.speed * dt;
          isMoving = true;
          
          this.sprite.position.x = this.x;
          this.sprite.position.z = this.y;
        }
      } else {
        this.state = 'IDLE';
      }
    } else if (this.state === 'ATTACKING') {
      this.attackTimer -= dt;
      
      // Holy Smite Telegraph Animation: Raise staff and shake it!
      const angle = Date.now() / 40;
      this.rightArm.rotation.x = -Math.PI + Math.sin(angle) * 0.4;
      this.rightArm.rotation.y = Math.cos(angle) * 0.4;
      
      // Spawn golden sparkles using hit particles around the boss area
      if (combatSystem && combatSystem.particleSystem && Math.random() < 0.25) {
        combatSystem.particleSystem.spawn(
          this.x + (Math.random() - 0.5) * 48, 
          this.y + (Math.random() - 0.5) * 48, 
          'hit', // will render golden particles
          1
        );
      }

      if (this.attackTimer <= 0) {
        // Execute attack
        if (this.currentAttack === 'HOLY_SMITE') {
          // 3x3 AoE around boss
          combatSystem.activeAttacks.push({
            x: this.x - GAME.TILE_SIZE,
            y: this.y - GAME.TILE_SIZE,
            width: this.width + GAME.TILE_SIZE * 2,
            height: this.height + GAME.TILE_SIZE * 2,
            damage: 25,
            source: this,
            type: 'holy',
            life: 0.2
          });
        }
        
        this.state = 'CHASING';
        this.attackCooldown = 4; // wait before next attack
      }
    }

    // Directional facing turning towards player
    if (player && !player.isDead) {
      const targetAngle = Math.atan2(player.x - this.x, player.y - this.y);
      
      let angleDiff = targetAngle - this.sprite.rotation.y;
      angleDiff = Math.atan2(Math.sin(angleDiff), Math.cos(angleDiff));
      this.sprite.rotation.y += angleDiff * 8 * dt;
    }

    // Heavy Walk Animation
    if (isMoving) {
      const time = Date.now() / 150;
      this.leftLeg.rotation.x = Math.sin(time) * 0.5;
      this.rightLeg.rotation.x = -Math.sin(time) * 0.5;
      if (this.state !== 'ATTACKING') {
        this.leftArm.rotation.x = -Math.sin(time) * 0.3;
        this.rightArm.rotation.x = Math.sin(time) * 0.3;
        this.rightArm.rotation.y = 0;
      }
    } else {
      this.leftLeg.rotation.x *= 0.8;
      this.rightLeg.rotation.x *= 0.8;
      if (this.state !== 'ATTACKING') {
        this.leftArm.rotation.x *= 0.8;
        this.rightArm.rotation.x *= 0.8;
        this.rightArm.rotation.y *= 0.8;
      }
    }

    // Visual damage and state styling
    if (this.isInvincible) {
      this.setColor(0xff0000); // Damage flash red
    } else {
      if (this.state === 'ATTACKING') {
        this.setColor(0xffd700); // Yellow gold holy charge
      } else {
        this.setColor(null); // Normal robes
      }
    }
  }

  setColor(colorHex) {
    this.sprite.traverse(child => {
      if (child.isMesh) {
        if (!child.userData.originalColor) {
          child.userData.originalColor = child.material.color.getHex();
        }
        if (colorHex !== null) {
          child.material.color.setHex(colorHex);
        } else {
          child.material.color.setHex(child.userData.originalColor);
        }
      }
    });
  }
}
