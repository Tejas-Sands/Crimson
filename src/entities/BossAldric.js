import * as THREE from 'three';
import { GAME, COMBAT } from '../data/constants.js';
import { distance } from '../core/Utils.js';

export class BossAldric {
  constructor(x, y, scene, assetGen) {
    this.x = x;
    this.y = y;
    this.width = 32;
    this.height = 32;
    
    this.hp = 300;
    this.maxHp = 300;
    this.isDead = false;
    this.isInvincible = false;
    this.invincibilityTimer = 0;
    
    // Physics
    this.vx = 0;
    this.vy = 0;
    this.mass = 4;
    this.staggerResistance = true;
    this.isStaggered = false;
    this.staggerTimer = 0;
    
    this.phase = 1;
    this.state = 'IDLE'; // IDLE, CHASING, TELEGRAPHING, ATTACKING, SHIELDING, CHARGING
    
    // Attack system
    this.attackCooldown = 3;
    this.currentAttack = null;
    this.telegraphTimer = 0;
    this.attackTimer = 0;
    this.lastAttack = null; // prevent repeats
    
    // Shield
    this.hasShield = false;
    this.shieldTimer = 0;
    this.shieldCooldown = 0;
    
    // Charge
    this.chargeDirX = 0;
    this.chargeDirY = 0;
    this.chargeSpeed = 0;
    
    // Holy Rain pillars
    this.rainPillars = [];
    
    // Phase 2 enrage
    this.isEnraged = false;
    this.speed = 40;
    
    this.scene = scene;
    
    // 3D Model
    this.sprite = new THREE.Group();
    
    const torsoGeo = new THREE.BoxGeometry(10, 14, 8);
    const torsoMat = new THREE.MeshLambertMaterial({ color: 0x5a1818 });
    this.torso = new THREE.Mesh(torsoGeo, torsoMat);
    this.torso.position.set(0, 13, 0);
    this.torso.castShadow = true;
    this.torso.receiveShadow = true;
    this.sprite.add(this.torso);

    const trimGeo = new THREE.BoxGeometry(10.4, 14.2, 2);
    const trimMat = new THREE.MeshLambertMaterial({ color: 0xd4af37 });
    this.goldTrim = new THREE.Mesh(trimGeo, trimMat);
    this.goldTrim.position.set(0, 13, 3.2);
    this.sprite.add(this.goldTrim);

    const headGeo = new THREE.BoxGeometry(7, 7, 7);
    const headMat = new THREE.MeshLambertMaterial({ color: 0xe5e5eb });
    this.head = new THREE.Mesh(headGeo, headMat);
    this.head.position.set(0, 22.5, 0);
    this.head.castShadow = true;
    this.head.receiveShadow = true;
    this.sprite.add(this.head);

    // Eyes
    const eyeGeo = new THREE.BoxGeometry(1.2, 0.6, 0.3);
    const eyeMat = new THREE.MeshBasicMaterial({ color: 0xffd700 });
    this.leftBossEye = new THREE.Mesh(eyeGeo, eyeMat);
    this.leftBossEye.position.set(-1.5, 0.5, 3.6);
    this.head.add(this.leftBossEye);
    this.rightBossEye = new THREE.Mesh(eyeGeo, eyeMat);
    this.rightBossEye.position.set(1.5, 0.5, 3.6);
    this.head.add(this.rightBossEye);

    const hatBaseGeo = new THREE.BoxGeometry(7.2, 5, 7.2);
    const hatBaseMat = new THREE.MeshLambertMaterial({ color: 0xd4af37 });
    this.hatBase = new THREE.Mesh(hatBaseGeo, hatBaseMat);
    this.hatBase.position.set(0, 4.5, 0);
    this.head.add(this.hatBase);

    const hatPointGeo = new THREE.ConeGeometry(5, 6, 4);
    const hatPointMat = new THREE.MeshLambertMaterial({ color: 0x900000 });
    this.hatPoint = new THREE.Mesh(hatPointGeo, hatPointMat);
    this.hatPoint.position.set(0, 9, 0);
    this.hatPoint.rotation.y = Math.PI / 4;
    this.head.add(this.hatPoint);

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

    const staffHandleGeo = new THREE.BoxGeometry(0.8, 20, 0.8);
    const staffHandleMat = new THREE.MeshLambertMaterial({ color: 0x333333 });
    this.staffHandle = new THREE.Mesh(staffHandleGeo, staffHandleMat);
    this.staffHandle.position.set(0, -4.0, 3.0);
    this.staffHandle.rotation.x = Math.PI / 2;
    this.rightArm.add(this.staffHandle);

    const scepterHeadGeo = new THREE.BoxGeometry(3, 3, 3);
    this.scepterHeadMat = new THREE.MeshBasicMaterial({ color: 0xffd700 });
    this.scepterHead = new THREE.Mesh(scepterHeadGeo, this.scepterHeadMat);
    this.scepterHead.position.set(0, -13.0, 3.0);
    this.scepterHead.rotation.x = Math.PI / 2;
    this.rightArm.add(this.scepterHead);

    // Shield visual (hidden by default)
    const shieldGeo = new THREE.SphereGeometry(22, 8, 8);
    this.shieldMat = new THREE.MeshBasicMaterial({ 
      color: 0xffd700, transparent: true, opacity: 0, 
      wireframe: true, side: THREE.DoubleSide 
    });
    this.shieldMesh = new THREE.Mesh(shieldGeo, this.shieldMat);
    this.shieldMesh.position.set(0, 12, 0);
    this.sprite.add(this.shieldMesh);

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

    this.sprite.position.set(this.x, 0, this.y);
    scene.add(this.sprite);
  }

  _getAvailableAttacks() {
    if (this.phase === 1) {
      return ['HOLY_SMITE', 'STAFF_SWEEP', 'DIVINE_SHIELD'];
    }
    const attacks = ['HOLY_SMITE', 'STAFF_SWEEP', 'HOLY_RAIN', 'CHARGE'];
    if (this.isEnraged) attacks.push('HOLY_RAIN'); // double chance
    return attacks;
  }

  _chooseAttack(distToPlayer) {
    const available = this._getAvailableAttacks().filter(a => a !== this.lastAttack);
    if (this.hasShield || this.shieldCooldown > 0) {
      const idx = available.indexOf('DIVINE_SHIELD');
      if (idx !== -1) available.splice(idx, 1);
    }
    if (distToPlayer > GAME.TILE_SIZE * 4) {
      // Prefer ranged
      const ranged = available.filter(a => a === 'HOLY_RAIN' || a === 'CHARGE');
      if (ranged.length) return ranged[Math.floor(Math.random() * ranged.length)];
    }
    return available[Math.floor(Math.random() * available.length)] || 'HOLY_SMITE';
  }

  update(dt, player, tileMap, combatSystem) {
    if (this.isDead) return;

    if (this.isStaggered) {
      const wobble = Math.sin(Date.now() / 40) * 0.1;
      this.sprite.rotation.z = wobble;
      return;
    }
    this.sprite.rotation.z = 0;

    if (this.invincibilityTimer > 0) {
      this.invincibilityTimer -= dt * 1000;
      if (this.invincibilityTimer <= 0) this.isInvincible = false;
    }

    // Phase transition
    if (this.phase === 1 && this.hp <= 150) {
      this.phase = 2;
      this.speed = 55;
      this.state = 'SHIELDING';
      this.hasShield = true;
      this.shieldTimer = COMBAT.BOSS_SHIELD_DURATION * 1.5;
      this.attackCooldown = 3;
      if (combatSystem && combatSystem.particleSystem) {
        combatSystem.particleSystem.spawn(this.x + this.width/2, this.y + this.height/2, 'boss_transition', 40);
        combatSystem.particleSystem.spawn(this.x + this.width/2, this.y + this.height/2, 'holy_pillar', 15);
      }
      if (combatSystem && combatSystem.camera) {
        combatSystem.camera.shake(12, 0.8);
      }
    }

    // Enrage at 25%
    if (!this.isEnraged && this.hp <= 75) {
      this.isEnraged = true;
      this.speed = 70;
    }

    if (this.hp <= 0) {
      this.isDead = true;
      return;
    }

    // Shield timer
    if (this.hasShield) {
      this.shieldTimer -= dt;
      this.shieldMat.opacity = 0.3 + Math.sin(Date.now() / 200) * 0.1;
      this.shieldMesh.rotation.y += dt * 2;
      if (combatSystem && combatSystem.particleSystem && Math.random() < 0.15) {
        combatSystem.particleSystem.spawn(this.x + this.width/2, this.y + this.height/2, 'shield_glow', 1);
      }
      if (this.shieldTimer <= 0) {
        this.hasShield = false;
        this.shieldMat.opacity = 0;
        this.shieldCooldown = 10;
      }
    }
    if (this.shieldCooldown > 0) this.shieldCooldown -= dt;

    // Holy Rain pillars
    for (let i = this.rainPillars.length - 1; i >= 0; i--) {
      const p = this.rainPillars[i];
      p.timer -= dt;
      if (p.timer <= 0 && !p.exploded) {
        p.exploded = true;
        if (combatSystem) {
          combatSystem.activeAttacks.push(
            Combat.createAoEHitbox(this, p.x - 16, p.y - 16, 32, 32, COMBAT.BOSS_RAIN_DMG, 'holy', 0.15)
          );
          if (combatSystem.particleSystem) {
            combatSystem.particleSystem.spawn(p.x, p.y, 'holy_pillar', 8);
          }
          if (combatSystem.camera) combatSystem.camera.shake(3, 0.15);
        }
      }
      if (p.timer <= -0.5) {
        this.rainPillars.splice(i, 1);
      }
    }

    const distToPlayer = distance(this.x, this.y, player.x, player.y);
    let isMoving = false;

    // State machine
    switch (this.state) {
      case 'IDLE':
        if (distToPlayer < GAME.TILE_SIZE * 10) {
          this.state = 'CHASING';
        }
        break;

      case 'CHASING':
        this.attackCooldown -= dt;
        if (this.attackCooldown <= 0) {
          const attack = this._chooseAttack(distToPlayer);
          this.currentAttack = attack;
          this.lastAttack = attack;
          
          if (attack === 'DIVINE_SHIELD') {
            this.state = 'SHIELDING';
            this.hasShield = true;
            this.shieldTimer = COMBAT.BOSS_SHIELD_DURATION;
            this.attackCooldown = 2;
          } else if (attack === 'CHARGE') {
            this.state = 'TELEGRAPHING';
            this.telegraphTimer = COMBAT.BOSS_CHARGE_TELEGRAPH;
            const d = distance(this.x, this.y, player.x, player.y) || 1;
            this.chargeDirX = (player.x - this.x) / d;
            this.chargeDirY = (player.y - this.y) / d;
          } else {
            this.state = 'TELEGRAPHING';
            if (attack === 'HOLY_SMITE') this.telegraphTimer = COMBAT.BOSS_SMITE_TELEGRAPH;
            else if (attack === 'STAFF_SWEEP') this.telegraphTimer = COMBAT.BOSS_SWEEP_TELEGRAPH;
            else if (attack === 'HOLY_RAIN') this.telegraphTimer = COMBAT.BOSS_RAIN_TELEGRAPH;
          }
        } else {
          // Move towards player
          if (distToPlayer > GAME.TILE_SIZE * 2) {
            const dx = (player.x - this.x) / distToPlayer;
            const dy = (player.y - this.y) / distToPlayer;
            this.x += dx * this.speed * dt;
            this.y += dy * this.speed * dt;
            isMoving = true;
          }
        }
        break;

      case 'TELEGRAPHING':
        this.telegraphTimer -= dt;
        
        // Telegraph animations per attack
        if (this.currentAttack === 'HOLY_SMITE') {
          const a = Date.now() / 40;
          this.rightArm.rotation.x = -Math.PI + Math.sin(a) * 0.4;
          this.rightArm.rotation.y = Math.cos(a) * 0.4;
          this.scepterHeadMat.color.setHSL(0.12, 1, 0.5 + Math.sin(a) * 0.3);
          if (combatSystem && combatSystem.particleSystem && Math.random() < 0.2) {
            combatSystem.particleSystem.spawn(
              this.x + (Math.random() - 0.5) * 48,
              this.y + (Math.random() - 0.5) * 48,
              'holy_pillar', 1
            );
          }
        } else if (this.currentAttack === 'STAFF_SWEEP') {
          const p = 1 - this.telegraphTimer / COMBAT.BOSS_SWEEP_TELEGRAPH;
          this.rightArm.rotation.x = -Math.PI / 2 * p;
          this.torso.rotation.y = -Math.PI / 3 * p;
        } else if (this.currentAttack === 'CHARGE') {
          const p = 1 - this.telegraphTimer / COMBAT.BOSS_CHARGE_TELEGRAPH;
          this.torso.rotation.x = -0.3 * p;
          this.sprite.position.y = 2 * p;
        } else if (this.currentAttack === 'HOLY_RAIN') {
          this.rightArm.rotation.x = -Math.PI;
          this.leftArm.rotation.x = -Math.PI;
          if (combatSystem && combatSystem.particleSystem && Math.random() < 0.3) {
            combatSystem.particleSystem.spawn(this.x + this.width/2, this.y + this.height/2, 'holy_pillar', 1);
          }
        }

        if (this.telegraphTimer <= 0) {
          this.state = 'ATTACKING';
          this.attackTimer = 0.3;
          this._executeAttack(player, combatSystem);
        }
        break;

      case 'ATTACKING':
        this.attackTimer -= dt;
        
        if (this.currentAttack === 'CHARGE') {
          this.x += this.chargeDirX * 300 * dt;
          this.y += this.chargeDirY * 300 * dt;
          isMoving = true;
        }

        if (this.attackTimer <= 0) {
          this.state = 'CHASING';
          this.attackCooldown = this.isEnraged ? 1.5 : (this.phase === 2 ? 2.5 : 4);
          this.torso.rotation.y = 0;
          this.torso.rotation.x = 0;
          this.sprite.position.y = 0;
          this.scepterHeadMat.color.setHex(0xffd700);
        }
        break;

      case 'SHIELDING':
        if (!this.hasShield) {
          this.state = 'CHASING';
          this.attackCooldown = 2;
        }
        // Idle during shield
        break;
    }

    this.sprite.position.x = this.x;
    this.sprite.position.z = this.y;

    // Face player
    if (player && !player.isDead && this.state !== 'CHARGING') {
      const targetAngle = Math.atan2(player.x - this.x, player.y - this.y);
      let angleDiff = targetAngle - this.sprite.rotation.y;
      angleDiff = Math.atan2(Math.sin(angleDiff), Math.cos(angleDiff));
      this.sprite.rotation.y += angleDiff * 8 * dt;
    }

    // Walk animation
    if (isMoving) {
      const time = Date.now() / 150;
      this.leftLeg.rotation.x = Math.sin(time) * 0.5;
      this.rightLeg.rotation.x = -Math.sin(time) * 0.5;
      if (this.state === 'CHASING') {
        this.leftArm.rotation.x = -Math.sin(time) * 0.3;
        this.rightArm.rotation.x = Math.sin(time) * 0.3;
        this.rightArm.rotation.y = 0;
      }
    } else {
      this.leftLeg.rotation.x *= 0.8;
      this.rightLeg.rotation.x *= 0.8;
      if (this.state === 'IDLE' || this.state === 'CHASING' || this.state === 'SHIELDING') {
        this.leftArm.rotation.x *= 0.8;
        this.rightArm.rotation.x *= 0.8;
        this.rightArm.rotation.y *= 0.8;
      }
    }

    // Visual state
    if (this.isInvincible) {
      this.setColor(0xff0000);
    } else if (this.state === 'TELEGRAPHING') {
      this.setColor(0xffcc00);
    } else if (this.state === 'ATTACKING') {
      this.setColor(0xffd700);
    } else if (this.isEnraged) {
      this.setColor(0xffffff);
    } else if (this.hasShield) {
      this.setColor(0xffd700);
    } else {
      this.setColor(null);
    }
  }

  _executeAttack(player, combatSystem) {
    if (!combatSystem) return;
    const ts = GAME.TILE_SIZE;

    switch (this.currentAttack) {
      case 'HOLY_SMITE':
        combatSystem.activeAttacks.push(
          Combat.createAoEHitbox(this, this.x - ts, this.y - ts, this.width + ts*2, this.height + ts*2, COMBAT.BOSS_SMITE_DMG, 'holy', 0.2)
        );
        if (combatSystem.particleSystem) {
          combatSystem.particleSystem.spawn(this.x + this.width/2, this.y + this.height/2, 'consecrate', 5);
          combatSystem.particleSystem.spawn(this.x + this.width/2, this.y + this.height/2, 'holy_pillar', 10);
        }
        if (combatSystem.camera) combatSystem.camera.shake(6, 0.3);
        break;

      case 'STAFF_SWEEP':
        // 270 arc, large range
        this.facing = 1; // face current direction for arc calc
        const sweepHb = Combat.createMeleeHitbox(this, 'sweep');
        sweepHb.damage = COMBAT.BOSS_SWEEP_DMG;
        sweepHb.arcDeg = 270;
        sweepHb.range = ts * 2.5;
        sweepHb.width = ts * 5;
        sweepHb.height = ts * 5;
        sweepHb.x = this.x + this.width/2 - ts * 2.5;
        sweepHb.y = this.y + this.height/2 - ts * 2.5;
        combatSystem.activeAttacks.push(sweepHb);
        if (combatSystem.camera) combatSystem.camera.shake(4, 0.2);
        break;

      case 'CHARGE':
        this.attackTimer = 0.4;
        combatSystem.activeAttacks.push(
          Combat.createAoEHitbox(this, this.x - 4, this.y - 4, this.width + 8, this.height + 8, COMBAT.BOSS_CHARGE_DMG, 'holy', 0.4)
        );
        if (combatSystem.camera) combatSystem.camera.shake(7, 0.3);
        break;

      case 'HOLY_RAIN':
        this.attackTimer = 0.5;
        const count = this.isEnraged ? 7 : 5;
        for (let i = 0; i < count; i++) {
          const px = player.x + (Math.random() - 0.5) * ts * 8;
          const py = player.y + (Math.random() - 0.5) * ts * 8;
          this.rainPillars.push({
            x: px, y: py,
            timer: COMBAT.BOSS_RAIN_TELEGRAPH + i * 0.15,
            exploded: false
          });
          // Telegraph markers
          if (combatSystem.particleSystem) {
            combatSystem.particleSystem.spawn(px, py, 'consecrate', 2);
          }
        }
        break;
    }
  }

  setColor(colorHex) {
    this.sprite.traverse(child => {
      if (child.isMesh && child !== this.shieldMesh) {
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
