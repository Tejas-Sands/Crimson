import * as THREE from 'three';
import { DAY_NIGHT } from '../data/constants.js';

export class DayNight {
  constructor() {
    this.time = 0; // seconds
    this.cycleDuration = DAY_NIGHT.CYCLE_DURATION_MINS * 60;
    this.dayDuration = this.cycleDuration * DAY_NIGHT.DAY_RATIO;
    this.nightDuration = this.cycleDuration * DAY_NIGHT.NIGHT_RATIO;
    
    this.darknessAlpha = 0; // 0 = full day, 0.8 = full night
  }

  initLighting(scene) {
    this.ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(this.ambientLight);

    this.dirLight = new THREE.DirectionalLight(0xfffaea, 1.0);
    this.dirLight.position.set(100, 200, 50);
    this.dirLight.castShadow = true;
    
    // Configure shadow properties
    this.dirLight.shadow.mapSize.width = 2048;
    this.dirLight.shadow.mapSize.height = 2048;
    this.dirLight.shadow.camera.near = 0.5;
    this.dirLight.shadow.camera.far = 500;
    this.dirLight.shadow.camera.left = -300;
    this.dirLight.shadow.camera.right = 300;
    this.dirLight.shadow.camera.top = 300;
    this.dirLight.shadow.camera.bottom = -300;
    
    scene.add(this.dirLight);

    this.playerLight = new THREE.PointLight(0xffaa00, 0, 150);
    this.playerLight.castShadow = true;
    scene.add(this.playerLight);
  }

  updatePlayerLight(player) {
    if (!this.playerLight) return;
    this.playerLight.position.set(player.x, 20, player.y);
    
    // Turn on player light at night
    if (this.darknessAlpha > 0.1) {
      this.playerLight.intensity = this.darknessAlpha * 2.0; // scales up to 1.6
    } else {
      this.playerLight.intensity = 0;
    }
  }

  update(dt) {
    this.time += dt;
    if (this.time >= this.cycleDuration) {
      this.time -= this.cycleDuration;
    }

    if (this.time < this.dayDuration) {
      // Daytime
      const timeUntilDusk = this.dayDuration - this.time;
      if (timeUntilDusk < DAY_NIGHT.TRANSITION_SEC) {
        const progress = 1 - (timeUntilDusk / DAY_NIGHT.TRANSITION_SEC);
        this.darknessAlpha = progress * 0.8;
      } else {
        this.darknessAlpha = 0;
      }
    } else {
      // Nighttime
      const timeUntilDawn = this.cycleDuration - this.time;
      if (timeUntilDawn < DAY_NIGHT.TRANSITION_SEC) {
        const progress = 1 - (timeUntilDawn / DAY_NIGHT.TRANSITION_SEC);
        this.darknessAlpha = 0.8 - (progress * 0.8);
      } else {
        this.darknessAlpha = 0.8;
      }
    }

    // Apply lighting changes
    if (this.ambientLight && this.dirLight) {
      // Interpolate colors/intensity based on darkness
      // Day = white/bright, Night = dark blue/dim
      const dayAmbient = new THREE.Color(0xffffff);
      const nightAmbient = new THREE.Color(0x1a253a);
      this.ambientLight.color.copy(dayAmbient).lerp(nightAmbient, this.darknessAlpha / 0.8);
      this.ambientLight.intensity = 0.8 - (this.darknessAlpha * 0.5); // 0.8 -> 0.4
      
      const dayDir = new THREE.Color(0xfffaea);
      const nightDir = new THREE.Color(0x3a4f6b); // moonlight
      this.dirLight.color.copy(dayDir).lerp(nightDir, this.darknessAlpha / 0.8);
      this.dirLight.intensity = 1.0 - (this.darknessAlpha * 0.6); // 1.0 -> 0.52
    }
  }

  isDaytime() {
    return this.time < this.dayDuration;
  }

  getCycleProgress() {
    return this.time / this.cycleDuration;
  }
}
