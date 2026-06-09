import { COMBAT, GAME } from '../data/constants.js';
import { rectIntersect } from '../core/Utils.js';

export class Combat {
  constructor() {
    this.activeAttacks = []; // List of hitboxes currently active
  }

  // Generate an attack hitbox based on entity position and facing
  static createMeleeHitbox(entity, attackType) {
    const ts = GAME.TILE_SIZE;
    let range, width, height, offsetX, offsetY;

    if (attackType === 'slash') {
      range = COMBAT.SLASH_RANGE_TILES * ts;
      width = 24; // slightly wider than tile
      height = 24;
    } else if (attackType === 'claw') {
      range = COMBAT.CLAW_RANGE_TILES * ts;
      width = 20;
      height = 20;
    }

    // Facing: 0=right, 1=down, 2=left, 3=up
    offsetX = 0; offsetY = 0;
    if (entity.facing === 0) offsetX = entity.width;
    else if (entity.facing === 2) offsetX = -width;
    else if (entity.facing === 1) offsetY = entity.height;
    else if (entity.facing === 3) offsetY = -height;

    // Adjust for centering on entity
    if (entity.facing === 0 || entity.facing === 2) {
      offsetY -= (height - entity.height) / 2;
    } else {
      offsetX -= (width - entity.width) / 2;
    }

    return {
      x: entity.x + offsetX,
      y: entity.y + offsetY,
      width,
      height,
      damage: attackType === 'slash' ? COMBAT.SLASH_DMG : COMBAT.CLAW_DMG,
      source: entity,
      type: attackType,
      life: 0.1 // Seconds hitbox is active
    };
  }

  update(dt, entities) {
    // Process active attacks
    for (let i = this.activeAttacks.length - 1; i >= 0; i--) {
      const attack = this.activeAttacks[i];
      attack.life -= dt;
      
      // Check collisions with entities
      for (let target of entities) {
        if (target !== attack.source && !target.isDead && !target.isInvincible) {
          if (rectIntersect(attack, target)) {
            // Hit!
            this.applyHit(attack, target);
          }
        }
      }

      if (attack.life <= 0) {
        this.activeAttacks.splice(i, 1);
      }
    }
  }

  applyHit(attack, target) {
    target.hp -= attack.damage;
    target.isInvincible = true;
    target.invincibilityTimer = 200; // ms

    // Apply knockback
    const kbForce = 32; // Pixels
    let dx = 0, dy = 0;
    if (attack.source.facing === 0) dx = 1;
    if (attack.source.facing === 2) dx = -1;
    if (attack.source.facing === 1) dy = 1;
    if (attack.source.facing === 3) dy = -1;
    
    target.x += dx * kbForce;
    target.y += dy * kbForce;

    // Visual damage flash handled in entity render
    
    // Spawn particles!
    if (this.particleSystem) {
      this.particleSystem.spawn(target.x + target.width/2, target.y + target.height/2, 'blood', 6);
      this.particleSystem.spawn(attack.x + attack.width/2, attack.y + attack.height/2, 'hit', 3);
    }

    if (target.hp <= 0) {
      target.hp = 0;
      target.isDead = true;
    }
  }

  renderDebug(ctx) {
    ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';
    for (let attack of this.activeAttacks) {
      ctx.fillRect(attack.x, attack.y, attack.width, attack.height);
    }
  }
}
