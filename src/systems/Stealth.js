import { distance, angleToDir } from '../core/Utils.js';
import { GAME } from '../data/constants.js';

export class Stealth {
  constructor() {
    // 
  }

  update(dt, player, entities, dayNight) {
    if (player.isDead) return;

    const isDay = dayNight ? dayNight.isDaytime() : true;
    const baseVisionRangeTiles = isDay ? 5 : 3;
    const baseVisionRange = baseVisionRangeTiles * GAME.TILE_SIZE;
    
    // Player stealth factors
    let stealthFactor = 1.0;
    if (player.isBatForm) stealthFactor = 0.2; // 80% harder to see
    if (player.isStealthHidden) stealthFactor = 0.05; // 95% harder to see (virtually invisible in bushes)

    for (let enemy of entities) {
      if (enemy.isDead) continue;

      // Distance check
      const dist = distance(enemy.x, enemy.y, player.x, player.y);
      const effectiveRange = baseVisionRange * stealthFactor;

      if (dist <= effectiveRange) {
        // Angle check
        const dx = player.x - enemy.x;
        const dy = player.y - enemy.y;
        const angle = Math.atan2(dy, dx);
        
        const enemyAngle = enemy.facingAngle !== undefined ? enemy.facingAngle : (
          enemy.facing === 1 ? Math.PI/2 : (
            enemy.facing === 2 ? Math.PI : (
              enemy.facing === 3 ? -Math.PI/2 : 0
            )
          )
        );

        let angleDiff = Math.abs(angle - enemyAngle);
        if (angleDiff > Math.PI) angleDiff = 2 * Math.PI - angleDiff;

        // 60 degree cone = PI/3
        if (angleDiff <= Math.PI/3) {
          // In cone!
          if (enemy.state === 'UNAWARE') {
            enemy.state = 'SUSPICIOUS';
            enemy.alertTimer = 1.0; // 1 sec to full alert
          } else if (enemy.state === 'SUSPICIOUS') {
            enemy.alertTimer -= dt;
            if (enemy.alertTimer <= 0) {
              enemy.state = 'ALERT';
            }
          }
        } else {
          // Outside cone but in range (e.g. heard footsteps?)
          // Simplification: loose suspicion
          if (enemy.state === 'SUSPICIOUS') {
            enemy.alertTimer += dt;
            if (enemy.alertTimer > 2.0) enemy.state = 'UNAWARE';
          }
        }
      } else {
        // Out of range
        if (enemy.state === 'SUSPICIOUS') {
          enemy.alertTimer += dt;
          if (enemy.alertTimer > 2.0) enemy.state = 'UNAWARE';
        }
      }

      // If alert, pursue player
      if (enemy.state === 'ALERT') {
        enemy.targetX = player.x;
        enemy.targetY = player.y;
      }
    }
  }
}
