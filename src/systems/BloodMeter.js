import { GAME, PLAYER, COMBAT } from '../data/constants.js';
import { distance } from '../core/Utils.js';

export class BloodMeter {
  constructor(player) {
    this.player = player;
    this.player.blood = 0;
    this.player.isStarving = true;
    
    // Ability cooldowns
    this.batCooldown = 0;
    this.surgeCooldown = 0;
    this.mistCooldown = 0;
    this.novaCooldown = 0;
    
    // Active states
    this.player.isBatForm = false;
    this.batTimer = 0;
    
    this.player.isSurging = false;
    this.surgeTimer = 0;
  }

  update(dt, input, dayNight, entities, tileMap) {
    // 1. Passive Drain
    const isDay = dayNight ? dayNight.isDaytime() : true; // default to day
    const drainRate = isDay ? PLAYER.BLOOD_DRAIN_RATE_DAY : PLAYER.BLOOD_DRAIN_RATE_NIGHT;
    
    // Running drains extra blood
    const runDrain = input.isDown('ShiftLeft') && (input.isDown('KeyW') || input.isDown('KeyA') || input.isDown('KeyS') || input.isDown('KeyD')) ? 0.5 : 0;
    
    this.player.blood -= (drainRate + runDrain) * dt;
    if (this.player.blood < 0) this.player.blood = 0;
    if (this.player.blood > PLAYER.MAX_BLOOD) this.player.blood = PLAYER.MAX_BLOOD;

    this.player.isStarving = this.player.blood === 0;

    // 2. Active Draining (E key on stunned/dead enemies)
    // For prototype, let's just let you drain dead enemies once.
    if (input.isDown('KeyE') && !this.player.isBatForm && !this.player.isStarving) {
      // Find nearby dead enemy
      for (let target of entities) {
        if (target.isDead && !target.isDrained) {
          const dist = distance(this.player.x, this.player.y, target.x, target.y);
          if (dist < GAME.TILE_SIZE * 2) {
            target.isDrained = true;
            this.player.blood += 40;
            if (this.player.blood > PLAYER.MAX_BLOOD) this.player.blood = PLAYER.MAX_BLOOD;
            break; // Drain one at a time
          }
        }
      }
    }

    // 3. Abilities
    this.updateAbilities(dt, input, tileMap);
  }

  updateAbilities(dt, input, tileMap) {
    // Cooldown reductions
    if (this.batCooldown > 0) this.batCooldown -= dt;
    if (this.surgeCooldown > 0) this.surgeCooldown -= dt;
    if (this.mistCooldown > 0) this.mistCooldown -= dt;
    if (this.novaCooldown > 0) this.novaCooldown -= dt;

    // Bat Form Timer
    if (this.player.isBatForm) {
      this.batTimer -= dt;
      if (this.batTimer <= 0) {
        this.player.isBatForm = false;
        // Snap to valid tile if flying over wall
        // Simplified: assuming we handle collision correctly in player move.
      }
    }

    // Starving blocks abilities
    if (this.player.isStarving) return;

    // Trigger Bat Form (Requires 25% blood) -> 25 blood
    if (input.isJustPressed('KeyF') && this.player.blood >= 25 && this.batCooldown <= 0 && !this.player.isBatForm) {
      this.player.blood -= 10; // Cost to activate
      this.player.isBatForm = true;
      this.batTimer = 5; // seconds
      this.batCooldown = 15;
    }

    // Trigger Mist Step (Requires 75% blood) -> 75 blood
    if (input.isJustPressed('KeyG') && this.player.blood >= 75 && this.mistCooldown <= 0 && !this.player.isBatForm) {
      this.player.blood -= 20; // Cost
      this.mistCooldown = 8;
      
      // Teleport 4 tiles in facing dir
      const dist = 4 * GAME.TILE_SIZE;
      let dx = 0, dy = 0;
      if (this.player.facing === 0) dx = dist;
      if (this.player.facing === 2) dx = -dist;
      if (this.player.facing === 1) dy = dist;
      if (this.player.facing === 3) dy = -dist;

      const nextX = this.player.x + dx;
      const nextY = this.player.y + dy;
      
      // Check collision
      const checkCol = Math.floor((nextX + this.player.width/2) / GAME.TILE_SIZE);
      const checkRow = Math.floor((nextY + this.player.height/2) / GAME.TILE_SIZE);
      if (!tileMap.isSolid(checkCol, checkRow)) {
        this.player.x = nextX;
        this.player.y = nextY;
        this.player.isInvincible = true;
        this.player.invincibilityTimer = 300;
      }
    }
  }
}
