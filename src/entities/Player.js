import * as THREE from 'three';
import { GAME, PLAYER, COMBAT } from '../data/constants.js';
import { Combat } from '../systems/Combat.js';

export class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 16;
    this.height = 16;
    
    this.hp = PLAYER.START_HP;
    this.blood = 0;
    
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
    
    // Three.js Sprite
    this.materialPlayer = new THREE.SpriteMaterial({ map: assetGen.sprites.player });
    this.materialBat = new THREE.SpriteMaterial({ map: assetGen.sprites.bat });
    
    this.sprite = new THREE.Sprite(this.materialPlayer);
    this.sprite.scale.set(16, 16, 1);
    
    // Position: 2D (x, y) maps to 3D (x, 0, z)
    // Offset Y so it stands on the ground
    this.sprite.position.set(this.x, 8, this.y);
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
      this.sprite.material = this.materialBat;
      this.sprite.position.y = 16; // Fly higher
    } else {
      if (this.isStarving) speedMultiplier *= 0.7; // 30% slower when starving
      this.sprite.material = this.materialPlayer;
      this.sprite.position.y = 8;
    }
    
    // Blink if invincible but not dodging (hurt)
    if (this.isInvincible && !this.isDodging) {
      this.sprite.material.opacity = (Math.floor(Date.now() / 100) % 2 === 0) ? 0.3 : 1.0;
    } else if (this.isDodging) {
      this.sprite.material.opacity = 0.5;
    } else {
      this.sprite.material.opacity = 1.0;
    }

    this.move(dx, dy, speedMultiplier, dt, tileMap);
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

  // render() is no longer needed since Three.js handles it
}
