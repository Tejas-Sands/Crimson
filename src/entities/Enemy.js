import * as THREE from 'three';
import { GAME, COMBAT } from '../data/constants.js';
import { distance, angleToDir } from '../core/Utils.js';
import { Combat } from '../systems/Combat.js';

export class Enemy {
  constructor(x, y, scene, assetGen, subType = 'guard', properties = {}) {
    this.x = x;
    this.y = y;
    this.width = 16;
    this.height = 16;
    
    this.subType = subType;
    this.hp = 40;
    this.maxHp = 40;
    this.isDead = false;
    
    this.isInvincible = false;
    this.invincibilityTimer = 0;

    // Physics
    this.vx = 0;
    this.vy = 0;
    this.mass = 2;

    // Stagger
    this.isStaggered = false;
    this.staggerTimer = 0;

    this.state = 'UNAWARE'; // UNAWARE, SUSPICIOUS, ALERT
    this.alertTimer = 0;
    
    this.facing = 0;
    this.facingAngle = 0;
    this.speed = 30;
    
    this.startX = x;
    this.startY = y;
    // Set patrol radius from properties or default
    this.patrolRadius = properties.patrolRadius !== undefined ? properties.patrolRadius : GAME.TILE_SIZE * 3;
    this.targetX = x + this.patrolRadius;
    this.targetY = y;
    
    // Attack system with telegraph
    this.isAttacking = false;
    this.isTelegraphing = false;
    this.telegraphTimer = 0;
    this.attackTimer = 0;
    this.attackCooldown = 0;
    this.currentAttack = null; // 'thrust', 'bash', 'sweep'
    
    // Strafe behavior
    this.strafeTimer = 0;
    this.strafeDir = 1;

    // 3D Model
    this.sprite = new THREE.Group();
    
    const torsoGeo = new THREE.BoxGeometry(6, 6.5, 4);
    const torsoColor = (subType === 'keykeeper') ? 0xd4af37 : 0x8a8a8f; // Golden chest for keykeeper
    const torsoMat = new THREE.MeshLambertMaterial({ color: torsoColor });
    this.torso = new THREE.Mesh(torsoGeo, torsoMat);
    this.torso.position.set(0, 7.5, 0);
    this.torso.castShadow = true;
    this.torso.receiveShadow = true;
    this.sprite.add(this.torso);

    const headGeo = new THREE.BoxGeometry(4, 4, 4);
    const headMat = new THREE.MeshLambertMaterial({ color: 0x7a7a7f });
    this.head = new THREE.Mesh(headGeo, headMat);
    this.head.position.set(0, 12, 0);
    this.head.castShadow = true;
    this.head.receiveShadow = true;
    this.sprite.add(this.head);

    const visorGeo = new THREE.BoxGeometry(3, 0.6, 0.4);
    const visorMat = new THREE.MeshBasicMaterial({ color: 0x111111 });
    this.visor = new THREE.Mesh(visorGeo, visorMat);
    this.visor.position.set(0, 0.5, 2.0);
    this.head.add(this.visor);

    // Telegraph indicator (above head, hidden by default)
    const indicatorGeo = new THREE.BoxGeometry(2, 2, 2);
    this.telegraphMat = new THREE.MeshBasicMaterial({ color: 0xffcc00, transparent: true, opacity: 0 });
    this.telegraphIndicator = new THREE.Mesh(indicatorGeo, this.telegraphMat);
    this.telegraphIndicator.position.set(0, 5, 0);
    this.head.add(this.telegraphIndicator);

    // Alert/Suspicion state indicator mesh (above head)
    const alertGeo = new THREE.BoxGeometry(0.8, 2.5, 0.8);
    this.alertMat = new THREE.MeshBasicMaterial({ color: 0xffaa00, transparent: true, opacity: 0 });
    this.alertIndicator = new THREE.Mesh(alertGeo, this.alertMat);
    this.alertIndicator.position.set(0, 16, 0); // High above the head
    this.sprite.add(this.alertIndicator);

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

    const handleGeo = new THREE.BoxGeometry(0.4, 11, 0.4);
    const handleMat = new THREE.MeshLambertMaterial({ color: 0x5c4033 });
    this.handle = new THREE.Mesh(handleGeo, handleMat);
    this.handle.position.set(0, -2.5, 1.8);
    this.handle.rotation.x = Math.PI / 2;
    this.rightArm.add(this.handle);

    const spearGeo = new THREE.BoxGeometry(0.8, 2.8, 0.4);
    const spearTipMat = new THREE.MeshLambertMaterial({ color: 0xdcdcdc });
    this.spearTip = new THREE.Mesh(spearGeo, spearTipMat);
    this.spearTip.position.set(0, -6.9, 1.8);
    this.spearTip.rotation.x = Math.PI / 2;
    this.rightArm.add(this.spearTip);

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

    this.sprite.position.set(this.x, 0, this.y);
    scene.add(this.sprite);
  }

  _chooseAttack(distToPlayer) {
    if (distToPlayer < GAME.TILE_SIZE * 1.0) return 'bash';
    if (distToPlayer < GAME.TILE_SIZE * 1.5) return Math.random() < 0.5 ? 'sweep' : 'thrust';
    return 'thrust';
  }

  _getTelegraphTime(attack) {
    if (attack === 'thrust') return COMBAT.ENEMY_THRUST_TELEGRAPH;
    if (attack === 'bash') return COMBAT.ENEMY_BASH_TELEGRAPH;
    return COMBAT.ENEMY_SWEEP_TELEGRAPH;
  }

  _getAttackRange(attack) {
    const ts = GAME.TILE_SIZE;
    if (attack === 'thrust') return COMBAT.ENEMY_THRUST_RANGE * ts;
    if (attack === 'bash') return COMBAT.ENEMY_BASH_RANGE * ts;
    return COMBAT.ENEMY_SWEEP_RANGE * ts;
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

  update(dt, tileMap, player, combatSystem) {
    if (this.isDead) {
      this.alertMat.opacity = 0;
      return;
    }

    // Update alert/suspicion indicator
    if (this.state === 'SUSPICIOUS') {
      this.alertMat.opacity = 1.0;
      this.alertMat.color.setHex(0xffaa00);
      this.alertIndicator.position.y = 16 + Math.sin(Date.now() / 150) * 0.5;
    } else if (this.state === 'ALERT') {
      this.alertMat.opacity = 1.0;
      this.alertMat.color.setHex(0xff0000);
      this.alertIndicator.position.y = 16 + Math.sin(Date.now() / 100) * 0.8;
    } else {
      this.alertMat.opacity = 0;
    }

    // Stagger — can't act
    if (this.isStaggered) {
      const wobble = Math.sin(Date.now() / 60) * 0.2;
      this.sprite.rotation.z = wobble;
      return;
    }
    this.sprite.rotation.z = 0;

    if (this.invincibilityTimer > 0) {
      this.invincibilityTimer -= dt * 1000;
      if (this.invincibilityTimer <= 0) this.isInvincible = false;
    }

    if (this.attackCooldown > 0) this.attackCooldown -= dt;

    // Telegraph phase
    if (this.isTelegraphing) {
      this.telegraphTimer -= dt;
      
      const totalTelegraph = this._getTelegraphTime(this.currentAttack);
      const progress = 1 - (this.telegraphTimer / totalTelegraph);
      this.telegraphMat.opacity = 0.5 + Math.sin(progress * Math.PI * 4) * 0.5;
      
      // Face the player during the first 80% of telegraph
      if (progress < 0.8 && player && !player.isDead) {
        const dx = player.x - this.x;
        const dy = player.y - this.y;
        this.facingAngle = Math.atan2(dy, dx);
        
        // Update cardinal facing for pathing/collisions
        const pi = Math.PI;
        if (this.facingAngle > -pi/4 && this.facingAngle <= pi/4) this.facing = 0;
        else if (this.facingAngle > pi/4 && this.facingAngle <= 3*pi/4) this.facing = 1;
        else if (this.facingAngle > 3*pi/4 || this.facingAngle <= -3*pi/4) this.facing = 2;
        else this.facing = 3;
      }

      if (this.currentAttack === 'thrust') {
        this.rightArm.rotation.x = -Math.PI / 2 * progress;
      } else if (this.currentAttack === 'bash') {
        this.leftArm.rotation.x = -Math.PI / 3 * progress;
        this.rightArm.rotation.x = -Math.PI / 4 * progress;
      } else {
        this.rightArm.rotation.x = -Math.PI / 2 * progress;
        this.torso.rotation.y = -Math.PI / 4 * progress;
      }

      if (this.telegraphTimer <= 0) {
        this.isTelegraphing = false;
        this.isAttacking = true;
        this.attackTimer = 0.15;
        this.telegraphMat.opacity = 0;
        
        if (combatSystem) {
          combatSystem.activeAttacks.push(
            Combat.createMeleeHitbox(this, this.currentAttack)
          );
        }
      }
      return;
    }

    // Attack execution
    if (this.isAttacking) {
      this.attackTimer -= dt;
      // Quick strike animation
      if (this.currentAttack === 'thrust') {
        this.rightArm.rotation.x = -Math.PI / 2 - (this.attackTimer / 0.15) * (Math.PI / 2);
      } else if (this.currentAttack === 'bash') {
        this.leftArm.rotation.x = -Math.PI / 2;
        this.rightArm.rotation.x = Math.PI / 4;
      } else {
        this.torso.rotation.y = Math.PI / 3;
        this.rightArm.rotation.x = -Math.PI / 3;
      }
      
      if (this.attackTimer <= 0) {
        this.isAttacking = false;
        this.attackCooldown = 1.8;
        this.torso.rotation.y = 0;
      }
      return;
    }

    let isMoving = false;

    if (this.state === 'ALERT' && player && !player.isDead) {
      const distToPlayer = distance(this.x, this.y, player.x, player.y);
      
      // Choose and initiate attack based on actual range
      const chosenAttack = this._chooseAttack(distToPlayer);
      const attackRange = this._getAttackRange(chosenAttack);
      if (distToPlayer <= attackRange && this.attackCooldown <= 0) {
        this.currentAttack = chosenAttack;
        this.isTelegraphing = true;
        this.telegraphTimer = this._getTelegraphTime(chosenAttack);
        return;
      }

      // Strafe between attacks when close
      if (distToPlayer < GAME.TILE_SIZE * 3 && this.attackCooldown > 0.5) {
        this.strafeTimer -= dt;
        if (this.strafeTimer <= 0) {
          this.strafeDir *= -1;
          this.strafeTimer = 0.8 + Math.random() * 0.6;
        }
        const dx = player.x - this.x;
        const dy = player.y - this.y;
        const dist = Math.sqrt(dx*dx + dy*dy) || 1;
        // Perpendicular movement
        const strafeX = (-dy / dist) * this.strafeDir;
        const strafeY = (dx / dist) * this.strafeDir;
        const speed = this.speed * 0.6;
        
        let moved = false;
        const nextX = this.x + strafeX * speed * dt;
        if (!this.checkTileCollision(nextX, this.y, tileMap)) {
          this.x = nextX;
          moved = true;
        }
        const nextY = this.y + strafeY * speed * dt;
        if (!this.checkTileCollision(this.x, nextY, tileMap)) {
          this.y = nextY;
          moved = true;
        }
        if (moved) {
          isMoving = true;
        }
      } else {
        // Chase player
        this.targetX = player.x;
        this.targetY = player.y;
      }
    }

    // Movement towards target
    if (this.state === 'UNAWARE' || (this.state === 'ALERT' && !this.isTelegraphing)) {
      const dist = distance(this.x, this.y, this.targetX, this.targetY);
      
      if (dist < 2) {
        if (this.state === 'UNAWARE') {
          if (this.targetX === this.startX) {
            this.targetX = this.startX + this.patrolRadius;
          } else {
            this.targetX = this.startX;
          }
        }
      } else {
        const dx = (this.targetX - this.x) / dist;
        const dy = (this.targetY - this.y) / dist;
        const spd = this.state === 'ALERT' ? this.speed * 1.3 : this.speed;
        isMoving = true;
        
        this.facingAngle = Math.atan2(dy, dx);
        this.facing = angleToDir(this.facingAngle);

        // Check X movement first
        const nextX = this.x + dx * spd * dt;
        if (!this.checkTileCollision(nextX, this.y, tileMap)) {
          this.x = nextX;
        }
        
        // Check Y movement next
        const nextY = this.y + dy * spd * dt;
        if (!this.checkTileCollision(this.x, nextY, tileMap)) {
          this.y = nextY;
        }
      }
    }

    this.sprite.position.x = this.x;
    this.sprite.position.z = this.y;

    // Facing rotation (continuous 360-degree based on facingAngle)
    const targetAngle = Math.PI / 2 - this.facingAngle;
    
    let angleDiff = targetAngle - this.sprite.rotation.y;
    angleDiff = Math.atan2(Math.sin(angleDiff), Math.cos(angleDiff));
    this.sprite.rotation.y += angleDiff * 15 * dt;

    // Walk animation
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
      if (!this.isAttacking && !this.isTelegraphing) {
        this.leftArm.rotation.x *= 0.8;
        this.rightArm.rotation.x *= 0.8;
      }
    }
    
    // Visual state
    if (this.isInvincible) {
      this.setColor(0xff0000);
    } else if (this.isTelegraphing) {
      this.setColor(0xffcc00);
    } else if (this.isAttacking) {
      this.setColor(0xffd700);
    } else if (this.state === 'ALERT') {
      this.setColor(0xff8888);
    } else if (this.state === 'SUSPICIOUS') {
      this.setColor(0xffffaa);
    } else {
      this.setColor(null);
    }
  }

  setColor(colorHex) {
    this.sprite.traverse(child => {
      if (child.isMesh && child !== this.telegraphIndicator) {
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
