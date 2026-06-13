import * as THREE from 'three';
import { GAME } from '../data/constants.js';

export class Camera {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.z = 0;
    this.lerpFactor = 0.1;
    
    this.threeCamera = new THREE.PerspectiveCamera(
      45, // FOV
      window.innerWidth / window.innerHeight,
      1, // Near
      1000 // Far
    );
    
    // We want an isometric / HD-2D angle
    this.cameraOffset = new THREE.Vector3(0, 150, 150);

    // Screen shake
    this.shakeIntensity = 0;
    this.shakeDuration = 0;
    this.shakeTimer = 0;
    this.shakeOffsetX = 0;
    this.shakeOffsetZ = 0;
  }

  /**
   * Trigger a screen shake effect.
   * @param {number} intensity - Max pixel offset (e.g. 3 for light, 8 for heavy)
   * @param {number} duration - Duration in seconds
   */
  shake(intensity, duration) {
    // Only override if stronger than current shake
    if (intensity > this.shakeIntensity) {
      this.shakeIntensity = intensity;
      this.shakeDuration = duration;
      this.shakeTimer = duration;
    }
  }

  update(targetX, targetZ, dt) {
    // Frame-rate independent smooth follow
    const lerpExponent = 1 - Math.exp(-8 * dt);
    this.x += (targetX - this.x) * lerpExponent;
    this.z += (targetZ - this.z) * lerpExponent;
    
    // Update screen shake
    this.shakeOffsetX = 0;
    this.shakeOffsetZ = 0;
    if (this.shakeTimer > 0 && dt) {
      this.shakeTimer -= dt;
      const progress = this.shakeTimer / this.shakeDuration;
      const decayedIntensity = this.shakeIntensity * progress;
      this.shakeOffsetX = (Math.random() - 0.5) * 2 * decayedIntensity;
      this.shakeOffsetZ = (Math.random() - 0.5) * 2 * decayedIntensity;
      
      if (this.shakeTimer <= 0) {
        this.shakeIntensity = 0;
        this.shakeDuration = 0;
        this.shakeTimer = 0;
      }
    }
    
    // Position camera with offset + shake
    this.threeCamera.position.x = this.x + this.cameraOffset.x + this.shakeOffsetX;
    this.threeCamera.position.y = this.cameraOffset.y;
    this.threeCamera.position.z = this.z + this.cameraOffset.z + this.shakeOffsetZ;
    
    // Look at target (with slight shake influence)
    this.threeCamera.lookAt(
      this.x + this.shakeOffsetX * 0.5, 
      0, 
      this.z + this.shakeOffsetZ * 0.5
    );
  }
}
