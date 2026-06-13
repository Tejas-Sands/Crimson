import { COMBAT, GAME } from '../data/constants.js';
import { rectIntersect, distance, dirToAngle, isInArc, applyFriction } from '../core/Utils.js';

export class Combat {
  constructor() {
    this.activeAttacks = []; // List of hitboxes currently active
    this.particleSystem = null;
    this.camera = null;
  }

  /**
   * Generate a melee hitbox based on entity position, facing, and combo step.
   * Uses arc-based collision for more realistic sword swings.
   */
  static createMeleeHitbox(entity, attackType, comboStep = 1) {
    const ts = GAME.TILE_SIZE;
    let damage, range, arcDeg, hitboxWidth, hitboxHeight;

    if (attackType === 'slash') {
      // Combo-dependent damage and arc
      if (comboStep === 1) {
        damage = COMBAT.COMBO_1_DMG;
        arcDeg = COMBAT.COMBO_1_ARC;
      } else if (comboStep === 2) {
        damage = COMBAT.COMBO_2_DMG;
        arcDeg = COMBAT.COMBO_2_ARC;
      } else {
        damage = COMBAT.COMBO_3_DMG;
        arcDeg = COMBAT.COMBO_3_ARC;
      }
      range = COMBAT.SLASH_RANGE_TILES * ts;
    } else if (attackType === 'claw') {
      damage = COMBAT.CLAW_DMG;
      arcDeg = 90;
      range = COMBAT.CLAW_RANGE_TILES * ts;
    } else if (attackType === 'thrust') {
      damage = COMBAT.ENEMY_THRUST_DMG;
      arcDeg = 30; // narrow thrust
      range = COMBAT.ENEMY_THRUST_RANGE * ts;
    } else if (attackType === 'bash') {
      damage = COMBAT.ENEMY_BASH_DMG;
      arcDeg = 120; // wide bash
      range = COMBAT.ENEMY_BASH_RANGE * ts;
    } else if (attackType === 'sweep') {
      damage = COMBAT.ENEMY_SWEEP_DMG;
      arcDeg = COMBAT.ENEMY_SWEEP_ARC;
      range = COMBAT.ENEMY_SWEEP_RANGE * ts;
    }

    // Calculate hitbox rectangle that encompasses the arc
    hitboxWidth = range * 2;
    hitboxHeight = range * 2;

    // Center position of the entity
    const cx = entity.x + entity.width / 2;
    const cy = entity.y + entity.height / 2;

    // Facing angle (use continuous facingAngle if available)
    const facingAngle = entity.facingAngle !== undefined ? entity.facingAngle : dirToAngle(entity.facing);

    // Offset hitbox center in facing direction
    const offsetDist = range * 0.5;
    const hbCenterX = cx + Math.cos(facingAngle) * offsetDist;
    const hbCenterY = cy + Math.sin(facingAngle) * offsetDist;

    return {
      x: hbCenterX - hitboxWidth / 2,
      y: hbCenterY - hitboxHeight / 2,
      width: hitboxWidth,
      height: hitboxHeight,
      centerX: hbCenterX,
      centerY: hbCenterY,
      sourceCX: cx,
      sourceCY: cy,
      damage,
      source: entity,
      type: attackType,
      comboStep,
      arcDeg,
      facingAngle,
      range,
      life: 0.1, // Seconds hitbox is active
      hasHit: new Set(), // Track entities already hit by this swing
      knockbackMultiplier: attackType === 'bash' ? COMBAT.ENEMY_BASH_KB_MULT : 1.0,
      isHeavy: comboStep === 3 || attackType === 'bash',
    };
  }

  /**
   * Create a boss AoE attack hitbox (non-directional, full area)
   */
  static createAoEHitbox(source, x, y, width, height, damage, type, life = 0.2) {
    return {
      x, y, width, height,
      centerX: x + width / 2,
      centerY: y + height / 2,
      damage,
      source,
      type,
      comboStep: 0,
      arcDeg: 360,
      facingAngle: 0,
      range: Math.max(width, height),
      life,
      hasHit: new Set(),
      knockbackMultiplier: 1.0,
      isHeavy: true,
    };
  }

  update(dt, entities, tileMap) {
    // Process active attacks
    for (let i = this.activeAttacks.length - 1; i >= 0; i--) {
      const attack = this.activeAttacks[i];
      attack.life -= dt;
      
      // Update melee hitbox position to follow its source entity
      if (attack.source && attack.arcDeg < 360) {
        const cx = attack.source.x + attack.source.width / 2;
        const cy = attack.source.y + attack.source.height / 2;
        const offsetDist = attack.range * 0.5;
        const hbCenterX = cx + Math.cos(attack.facingAngle) * offsetDist;
        const hbCenterY = cy + Math.sin(attack.facingAngle) * offsetDist;
        attack.centerX = hbCenterX;
        attack.centerY = hbCenterY;
        attack.sourceCX = cx;
        attack.sourceCY = cy;
        attack.x = hbCenterX - attack.width / 2;
        attack.y = hbCenterY - attack.height / 2;
      }
      
      // Check collisions with entities
      for (let target of entities) {
        if (target === attack.source) continue;
        if (target.isDead) continue;
        if (target.isInvincible) continue;
        if (attack.hasHit.has(target)) continue; // Already hit this entity

        // First: bounding box pre-check
        if (!rectIntersect(attack, target)) continue;

        // Second: arc check (skip for AoE/holy attacks)
        if (attack.arcDeg < 360) {
          const targetCX = target.x + target.width / 2;
          const targetCY = target.y + target.height / 2;
          
          const sourceCX = attack.sourceCX !== undefined ? attack.sourceCX : (attack.source.x + attack.source.width / 2);
          const sourceCY = attack.sourceCY !== undefined ? attack.sourceCY : (attack.source.y + attack.source.height / 2);

          const angleToTarget = Math.atan2(targetCY - sourceCY, targetCX - sourceCX);
          
          if (!isInArc(angleToTarget, attack.facingAngle, attack.arcDeg)) continue;

          // Distance check
          // Subtract target radius to allow hitting the edge of the target
          const targetRadius = Math.max(target.width, target.height) / 2;
          const dist = distance(sourceCX, sourceCY, targetCX, targetCY) - targetRadius;
          if (dist > attack.range) continue;
        }

        // Hit confirmed!
        attack.hasHit.add(target);
        this.applyHit(attack, target);
      }

      if (attack.life <= 0) {
        this.activeAttacks.splice(i, 1);
      }
    }

    // Apply physics velocity + friction to all entities
    for (let entity of entities) {
      if (entity.isDead) continue;
      if (entity.vx === undefined) continue; // Skip entities without physics

      // Apply friction
      entity.vx = applyFriction(entity.vx, COMBAT.FRICTION, dt);
      entity.vy = applyFriction(entity.vy, COMBAT.FRICTION, dt);

      // Apply velocity with tile map bounds collision check
      if (entity.vx !== 0 || entity.vy !== 0) {
        let nextX = entity.x + entity.vx * dt;
        let nextY = entity.y + entity.vy * dt;
        
        if (tileMap) {
          const ts = GAME.TILE_SIZE;
          
          // Check X collision
          let startCol = Math.floor(nextX / ts);
          let endCol = Math.floor((nextX + entity.width - 0.1) / ts);
          let startRow = Math.floor(entity.y / ts);
          let endRow = Math.floor((entity.y + entity.height - 0.1) / ts);
          let colCollision = false;
          for (let r = startRow; r <= endRow; r++) {
            for (let c = startCol; c <= endCol; c++) {
              if (tileMap.isSolid(c, r)) { colCollision = true; break; }
            }
            if (colCollision) break;
          }
          if (!colCollision) {
            entity.x = nextX;
          } else {
            entity.vx = 0; // stop knockback on wall hit
          }

          // Check Y collision
          startCol = Math.floor(entity.x / ts);
          endCol = Math.floor((entity.x + entity.width - 0.1) / ts);
          startRow = Math.floor(nextY / ts);
          endRow = Math.floor((nextY + entity.height - 0.1) / ts);
          let rowCollision = false;
          for (let r = startRow; r <= endRow; r++) {
            for (let c = startCol; c <= endCol; c++) {
              if (tileMap.isSolid(c, r)) { rowCollision = true; break; }
            }
            if (rowCollision) break;
          }
          if (!rowCollision) {
            entity.y = nextY;
          } else {
            entity.vy = 0; // stop knockback on wall hit
          }
        } else {
          entity.x = nextX;
          entity.y = nextY;
        }
        
        // Update 3D position
        if (entity.sprite) {
          entity.sprite.position.x = entity.x;
          entity.sprite.position.z = entity.y;
        }
      }

      // Stagger timer
      if (entity.staggerTimer !== undefined && entity.staggerTimer > 0) {
        entity.staggerTimer -= dt * 1000;
        if (entity.staggerTimer <= 0) {
          entity.staggerTimer = 0;
          entity.isStaggered = false;
        }
      }
    }
  }

  applyHit(attack, target) {
    // Check for boss shield
    if (target.hasShield) {
      // Spawn shield particles but no damage
      if (this.particleSystem) {
        this.particleSystem.spawn(target.x + target.width/2, target.y + target.height/2, 'shield_glow', 4);
      }
      return;
    }

    // Check if the attack is a sneak attack from a hiding player
    let damage = attack.damage;
    let isSneak = false;
    if (attack.source && attack.source.isStealthHidden) {
      isSneak = true;
      if (target.constructor.name === 'Enemy') {
        damage = target.maxHp || 40; // Instant kill regular guards!
      } else {
        damage = damage * 3; // Triple damage to bosses
      }
      if (attack.source.stealthAssassinations !== undefined) {
        attack.source.stealthAssassinations++;
        if (window.game && window.game.onStealthAssassination) {
          window.game.onStealthAssassination();
        }
      }
    } else if (attack.source && attack.source.constructor.name === 'Player') {
      const player = attack.source;
      if (player.hitComboCount !== undefined && player.hitComboCount > 0) {
        const mult = Math.min(1.5, 1.0 + player.hitComboCount * 0.1);
        damage = Math.round(damage * mult);
      }
      if (player.hitComboCount !== undefined) {
        player.hitComboCount++;
        player.hitComboTimer = 3.0;
      }
    }
    // Apply damage
    target.hp -= damage;
    target.isInvincible = true;
    target.invincibilityTimer = 200; // ms

    // Velocity-based knockback
    const mass = target.mass || 1;
    const kbForce = (attack.isHeavy ? COMBAT.HEAVY_KNOCKBACK : COMBAT.BASE_KNOCKBACK) 
                    * attack.knockbackMultiplier / mass;
    
    // Direction from attack source to target
    const sourceCX = attack.source.x + attack.source.width / 2;
    const sourceCY = attack.source.y + attack.source.height / 2;
    const targetCX = target.x + target.width / 2;
    const targetCY = target.y + target.height / 2;
    const dist = distance(sourceCX, sourceCY, targetCX, targetCY);
    
    if (dist > 0 && target.vx !== undefined) {
      const dx = (targetCX - sourceCX) / dist;
      const dy = (targetCY - sourceCY) / dist;
      target.vx += dx * kbForce;
      target.vy += dy * kbForce;
    }

    // Stagger check (heavy hits or damage above threshold)
    if (target.staggerTimer !== undefined) {
      if (attack.isHeavy || attack.damage >= COMBAT.STAGGER_THRESHOLD) {
        // Boss only staggers on combo finishers
        if (target.staggerResistance) {
          if (attack.comboStep === 3) {
            target.isStaggered = true;
            target.staggerTimer = 200; // shorter for boss
          }
        } else {
          target.isStaggered = true;
          target.staggerTimer = 300;
        }
      }
    }

    // Screen shake
    if (this.camera) {
      if (attack.isHeavy) {
        this.camera.shake(5, 0.2);
      } else {
        this.camera.shake(2, 0.1);
      }
    }

    // Spawn particles
    if (this.particleSystem) {
      if (isSneak) {
        this.particleSystem.spawn(targetCX, targetCY, 'blood', 15);
        this.particleSystem.spawn(targetCX, targetCY, 'hit', 8);
      } else {
        this.particleSystem.spawn(targetCX, targetCY, 'blood', 4 + (attack.isHeavy ? 4 : 0));
        this.particleSystem.spawn(
          (attack.centerX || targetCX), 
          (attack.centerY || targetCY), 
          'hit', 3
        );
      }
      
      // Slash trail on player attacks
      if (attack.type === 'slash') {
        this.particleSystem.spawn(targetCX, targetCY, 'slash_trail', 3);
      }

      // Stagger stars
      if (target.isStaggered) {
        this.particleSystem.spawn(targetCX, targetCY, 'stagger_stars', 5);
      }
    }

    // Death check
    if (target.hp <= 0) {
      target.hp = 0;
      target.isDead = true;
      
      // If the target is a Keykeeper, spawn a key on the map!
      if (target.subType === 'keykeeper') {
        const col = Math.floor((target.x + target.width/2) / GAME.TILE_SIZE);
        const row = Math.floor((target.y + target.height/2) / GAME.TILE_SIZE);
        if (window.game && window.game.spawnKeyAt) {
          window.game.spawnKeyAt(col, row);
        }
      }
      
      // Death burst particles
      if (this.particleSystem) {
        this.particleSystem.spawn(targetCX, targetCY, 'blood', 12);
      }
      if (this.camera) {
        this.camera.shake(6, 0.3);
      }
    }
  }
}
