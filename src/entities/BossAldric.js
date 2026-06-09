import * as THREE from 'three';
import { GAME } from '../data/constants.js';
import { distance } from '../core/Utils.js';

export class BossAldric {
  constructor(x, y) {
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
    
    // Three.js Sprite
    const material = new THREE.SpriteMaterial({ map: assetGen.sprites.aldric });
    this.sprite = new THREE.Sprite(material);
    this.sprite.scale.set(32, 32, 1);
    this.sprite.position.set(this.x, 16, this.y);
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
      // Could trigger a brief invincibility/cutscene state here
    }

    if (this.hp <= 0) {
      this.isDead = true;
      return;
    }

    const distToPlayer = distance(this.x, this.y, player.x, player.y);

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
          const dx = (player.x - this.x) / distToPlayer;
          const dy = (player.y - this.y) / distToPlayer;
          
          this.x += dx * this.speed * dt;
          this.y += dy * this.speed * dt;
          
          this.sprite.position.x = this.x;
          this.sprite.position.z = this.y;
        }
      } else {
        this.state = 'IDLE';
      }
    } else if (this.state === 'ATTACKING') {
      this.attackTimer -= dt;
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
    
    if (this.isInvincible) {
      this.sprite.material.color.setHex(0xff0000);
    } else {
      if (this.state === 'ATTACKING') {
        // Flash gold
        this.sprite.material.color.setHex(0xffd700);
      } else {
        this.sprite.material.color.setHex(0xffffff);
      }
    }
  }
}
