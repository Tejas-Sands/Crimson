import * as THREE from 'three';
import { GAME } from '../data/constants.js';
import { distance, angleToDir } from '../core/Utils.js';
import { Combat } from '../systems/Combat.js';

export class Enemy {
  constructor(x, y, scene, assetGen) {
    this.x = x;
    this.y = y;
    this.width = 16;
    this.height = 16;
    
    this.hp = 40;
    this.maxHp = 40;
    this.isDead = false;
    
    this.isInvincible = false;
    this.invincibilityTimer = 0;

    this.state = 'UNAWARE'; // UNAWARE, SUSPICIOUS, ALERT
    this.alertTimer = 0;
    
    this.facing = 0;
    this.speed = 30; // pixels per sec
    
    this.startX = x;
    this.startY = y;
    this.patrolRadius = GAME.TILE_SIZE * 3;
    this.targetX = x + this.patrolRadius;
    this.targetY = y;
    
    // Three.js 3D Model Group (Procedural Cathedral Guard representation)
    this.sprite = new THREE.Group();
    
    // Torso (metallic breastplate)
    const torsoGeo = new THREE.BoxGeometry(6, 6.5, 4);
    const torsoMat = new THREE.MeshLambertMaterial({ color: 0x8a8a8f });
    this.torso = new THREE.Mesh(torsoGeo, torsoMat);
    this.torso.position.set(0, 7.5, 0);
    this.torso.castShadow = true;
    this.torso.receiveShadow = true;
    this.sprite.add(this.torso);

    // Head with Templar Helmet
    const headGeo = new THREE.BoxGeometry(4, 4, 4);
    const headMat = new THREE.MeshLambertMaterial({ color: 0x7a7a7f });
    this.head = new THREE.Mesh(headGeo, headMat);
    this.head.position.set(0, 12, 0);
    this.head.castShadow = true;
    this.head.receiveShadow = true;
    this.sprite.add(this.head);

    // Helmet Visor (black horizontal slit)
    const visorGeo = new THREE.BoxGeometry(3, 0.6, 0.4);
    const visorMat = new THREE.MeshBasicMaterial({ color: 0x111111 });
    this.visor = new THREE.Mesh(visorGeo, visorMat);
    this.visor.position.set(0, 0.5, 2.0); // front face
    this.head.add(this.visor);

    // Arms
    const armGeo = new THREE.BoxGeometry(1.8, 5.5, 1.8);
    const armMat = new THREE.MeshLambertMaterial({ color: 0x222225 });
    
    this.leftArm = new THREE.Mesh(armGeo, armMat);
    this.leftArm.position.set(-3.8, 8, 0);
    this.leftArm.castShadow = true;
    this.sprite.add(this.leftArm);

    this.rightArm = new THREE.Mesh(armGeo, armMat);
    this.rightArm.position.set(3.8, 8, 0);
    this.rightArm.castShadow = true;
    this.sprite.add(this.rightArm);

    // Weapon: Steel Halberd/Spear attached to right arm
    const handleGeo = new THREE.BoxGeometry(0.4, 11, 0.4);
    const handleMat = new THREE.MeshLambertMaterial({ color: 0x5c4033 }); // wood
    this.handle = new THREE.Mesh(handleGeo, handleMat);
    this.handle.position.set(0, -2.5, 1.8);
    this.handle.rotation.x = Math.PI / 2; // points forward
    this.rightArm.add(this.handle);

    const spearGeo = new THREE.BoxGeometry(0.8, 2.8, 0.4);
    const spearTipMat = new THREE.MeshLambertMaterial({ color: 0xdcdcdc }); // steel tip
    this.spearTip = new THREE.Mesh(spearGeo, spearTipMat);
    this.spearTip.position.set(0, -6.9, 1.8);
    this.spearTip.rotation.x = Math.PI / 2;
    this.rightArm.add(this.spearTip);

    // Legs
    const legGeo = new THREE.BoxGeometry(2, 4.5, 2);
    const legMat = new THREE.MeshLambertMaterial({ color: 0x222225 });

    this.leftLeg = new THREE.Mesh(legGeo, legMat);
    this.leftLeg.position.set(-1.3, 2.25, 0);
    this.leftLeg.castShadow = true;
    this.leftLeg.receiveShadow = true;
    this.sprite.add(this.leftLeg);

    this.rightLeg = new THREE.Mesh(legGeo, legMat);
    this.rightLeg.position.set(1.3, 2.25, 0);
    this.rightLeg.castShadow = true;
    this.rightLeg.receiveShadow = true;
    this.sprite.add(this.rightLeg);

    this.isAttacking = false;
    this.attackTimer = 0;
    this.attackCooldown = 0;

    // Position: 2D (x, y) maps to 3D (x, 0, z)
    this.sprite.position.set(this.x, 0, this.y);
    scene.add(this.sprite);
  }

  update(dt, tileMap, player, combatSystem) {
    if (this.isDead) return;

    if (this.invincibilityTimer > 0) {
      this.invincibilityTimer -= dt * 1000;
      if (this.invincibilityTimer <= 0) this.isInvincible = false;
    }

    if (this.attackCooldown > 0) this.attackCooldown -= dt;

    if (this.isAttacking) {
      this.attackTimer -= dt;
      // Thrust arm forward
      this.rightArm.rotation.x = -Math.PI / 4 - (this.attackTimer / 0.3) * (Math.PI / 2);
      if (this.attackTimer <= 0) {
        this.isAttacking = false;
      }
    }

    let isMoving = false;

    // Movement & Guard AI Attacks
    if (this.state === 'UNAWARE' || this.state === 'ALERT') {
      const dist = distance(this.x, this.y, this.targetX, this.targetY);
      
      // Proximity-based guard slashing when Alert
      if (this.state === 'ALERT' && player && !player.isDead) {
        const distToPlayer = distance(this.x, this.y, player.x, player.y);
        if (distToPlayer < GAME.TILE_SIZE * 1.5 && this.attackCooldown <= 0 && !this.isAttacking) {
          this.isAttacking = true;
          this.attackTimer = 0.3;
          this.attackCooldown = 1.8;
          if (combatSystem) {
            combatSystem.activeAttacks.push(
              Combat.createMeleeHitbox(this, 'slash')
            );
          }
        }
      }

      if (dist < 2) {
        if (this.state === 'UNAWARE') {
          // Patrol back and forth
          if (this.targetX === this.startX) {
            this.targetX = this.startX + this.patrolRadius;
          } else {
            this.targetX = this.startX;
          }
        }
      } else {
        const dx = (this.targetX - this.x) / dist;
        const dy = (this.targetY - this.y) / dist;

        const nextX = this.x + dx * this.speed * dt;
        const nextY = this.y + dy * this.speed * dt;
        isMoving = true;
        
        // Face movement dir
        const angle = Math.atan2(dy, dx);
        this.facing = angleToDir(angle);

        // Simple collision
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

    // Directional facing turning
    let targetAngle = this.sprite.rotation.y;
    if (this.facing === 0) targetAngle = Math.PI / 2;      // Right (facing +X)
    else if (this.facing === 2) targetAngle = -Math.PI / 2; // Left (facing -X)
    else if (this.facing === 1) targetAngle = 0;           // Down (facing +Z)
    else if (this.facing === 3) targetAngle = Math.PI;      // Up (facing -Z)
    
    let angleDiff = targetAngle - this.sprite.rotation.y;
    angleDiff = Math.atan2(Math.sin(angleDiff), Math.cos(angleDiff));
    this.sprite.rotation.y += angleDiff * 15 * dt;

    // Walk animation limbs
    if (isMoving) {
      const time = Date.now() / 100;
      this.leftLeg.rotation.x = Math.sin(time) * 0.7;
      this.rightLeg.rotation.x = -Math.sin(time) * 0.7;
      if (!this.isAttacking) {
        this.leftArm.rotation.x = -Math.sin(time) * 0.5;
        this.rightArm.rotation.x = Math.sin(time) * 0.5;
      }
    } else {
      this.leftLeg.rotation.x *= 0.8;
      this.rightLeg.rotation.x *= 0.8;
      if (!this.isAttacking) {
        this.leftArm.rotation.x *= 0.8;
        this.rightArm.rotation.x *= 0.8;
      }
    }
    
    // Visual damage and state styling
    if (this.isInvincible) {
      this.setColor(0xff0000); // Damage flash
    } else {
      if (this.isAttacking) {
        this.setColor(0xffd700); // Gold slash prep
      } else if (this.state === 'ALERT') {
        this.setColor(0xff8888); // Red visor glow tint
      } else if (this.state === 'SUSPICIOUS') {
        this.setColor(0xffffaa); // Yellow tint
      } else {
        this.setColor(null); // Normal metallic armor
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
