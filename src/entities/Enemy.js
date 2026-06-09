import * as THREE from 'three';
import { GAME } from '../data/constants.js';
import { distance, angleToDir } from '../core/Utils.js';

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
    
    // Three.js Sprite
    const material = new THREE.SpriteMaterial({ map: assetGen.sprites.guard });
    this.sprite = new THREE.Sprite(material);
    this.sprite.scale.set(16, 16, 1);
    this.sprite.position.set(this.x, 8, this.y);
    scene.add(this.sprite);
  }

  update(dt, tileMap) {
    if (this.isDead) return;

    if (this.invincibilityTimer > 0) {
      this.invincibilityTimer -= dt * 1000;
      if (this.invincibilityTimer <= 0) this.isInvincible = false;
    }

    // Movement
    if (this.state === 'UNAWARE' || this.state === 'ALERT') {
      const dist = distance(this.x, this.y, this.targetX, this.targetY);
      
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
    
    // Visual Updates
    if (this.isInvincible) {
      this.sprite.material.color.setHex(0xff0000); // Flash red
    } else {
      if (this.state === 'ALERT') this.sprite.material.color.setHex(0xffaaaa);
      else if (this.state === 'SUSPICIOUS') this.sprite.material.color.setHex(0xffffaa);
      else this.sprite.material.color.setHex(0xffffff); // Normal
    }
  }
}
