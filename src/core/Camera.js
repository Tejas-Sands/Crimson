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
  }

  update(targetX, targetZ) {
    // Smooth follow
    this.x += (targetX - this.x) * this.lerpFactor;
    this.z += (targetZ - this.z) * this.lerpFactor;
    
    // Position camera with offset
    this.threeCamera.position.x = this.x + this.cameraOffset.x;
    this.threeCamera.position.y = this.cameraOffset.y;
    this.threeCamera.position.z = this.z + this.cameraOffset.z;
    
    // Look at target
    this.threeCamera.lookAt(this.x, 0, this.z);
  }
}
