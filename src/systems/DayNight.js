import * as THREE from 'three';
import { DAY_NIGHT } from '../data/constants.js';
import { ThemeManager } from '../world/ThemeManager.js';

export class DayNight {
  constructor() {
    this.time = 0;
    this.cycleDuration = DAY_NIGHT.CYCLE_DURATION_MINS * 60;
    this.dayDuration = this.cycleDuration * DAY_NIGHT.DAY_RATIO;
    this.nightDuration = this.cycleDuration * DAY_NIGHT.NIGHT_RATIO;
    
    this.darknessAlpha = 0;
    
    // Theme lighting (defaults to Theme 1)
    this.theme = ThemeManager.getTheme(1);
  }

  setTheme(themeId) {
    this.theme = ThemeManager.getTheme(themeId);
    this._applyThemeLighting();
  }

  _applyThemeLighting() {
    if (!this.ambientLight || !this.dirLight) return;
    const t = this.theme;
    this.ambientLight.color.setHex(t.ambientColor);
    this.ambientLight.intensity = t.ambientIntensity;
    this.dirLight.color.setHex(t.dirColor);
    this.dirLight.intensity = t.dirIntensity;
    this.dirLight.position.set(...t.dirPosition);
    if (this.playerLight) {
      this.playerLight.color.setHex(t.playerLightColor);
    }
  }

  initLighting(scene) {
    this.scene = scene;
    const t = this.theme;
    
    this.ambientLight = new THREE.AmbientLight(t.ambientColor, t.ambientIntensity);
    scene.add(this.ambientLight);

    this.dirLight = new THREE.DirectionalLight(t.dirColor, t.dirIntensity);
    this.dirLight.position.set(...t.dirPosition);
    this.dirLight.castShadow = true;
    this.dirLight.shadow.mapSize.width = 2048;
    this.dirLight.shadow.mapSize.height = 2048;
    this.dirLight.shadow.camera.near = 0.5;
    this.dirLight.shadow.camera.far = 500;
    this.dirLight.shadow.camera.left = -300;
    this.dirLight.shadow.camera.right = 300;
    this.dirLight.shadow.camera.top = 300;
    this.dirLight.shadow.camera.bottom = -300;
    scene.add(this.dirLight);

    this.playerLight = new THREE.PointLight(t.playerLightColor, 0, 150);
    this.playerLight.castShadow = true;
    scene.add(this.playerLight);
  }

  updatePlayerLight(player) {
    if (!this.playerLight) return;
    this.playerLight.position.set(player.x, 20, player.y);
    
    if (this.darknessAlpha > 0.1) {
      this.playerLight.intensity = this.darknessAlpha * 2.0;
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
      const timeUntilDusk = this.dayDuration - this.time;
      if (timeUntilDusk < DAY_NIGHT.TRANSITION_SEC) {
        const progress = 1 - (timeUntilDusk / DAY_NIGHT.TRANSITION_SEC);
        this.darknessAlpha = progress * 0.8;
      } else {
        this.darknessAlpha = 0;
      }
    } else {
      const timeUntilDawn = this.cycleDuration - this.time;
      if (timeUntilDawn < DAY_NIGHT.TRANSITION_SEC) {
        const progress = 1 - (timeUntilDawn / DAY_NIGHT.TRANSITION_SEC);
        this.darknessAlpha = 0.8 - (progress * 0.8);
      } else {
        this.darknessAlpha = 0.8;
      }
    }

    // Apply theme-aware lighting
    if (this.ambientLight && this.dirLight) {
      const t = this.theme;
      const dayAmbient = new THREE.Color(t.ambientColor);
      const nightAmbient = new THREE.Color(t.ambientNightColor);
      this.ambientLight.color.copy(dayAmbient).lerp(nightAmbient, this.darknessAlpha / 0.8);
      this.ambientLight.intensity = t.ambientIntensity - (this.darknessAlpha * (t.ambientIntensity * 0.5));
      
      const dayDir = new THREE.Color(t.dirColor);
      const nightDir = new THREE.Color(t.dirNightColor);
      this.dirLight.color.copy(dayDir).lerp(nightDir, this.darknessAlpha / 0.8);
      this.dirLight.intensity = t.dirIntensity - (this.darknessAlpha * (t.dirIntensity * 0.5));
    }

    if (this.scene) {
      const dayFog = new THREE.Color(this.theme.fogColor);
      const nightFog = new THREE.Color(0x030305);
      const currentFogColor = dayFog.clone().lerp(nightFog, this.darknessAlpha / 0.8);
      if (this.scene.fog) {
        this.scene.fog.color.copy(currentFogColor);
      }
      this.scene.background = currentFogColor;
    }
  }

  isDaytime() {
    return this.time < this.dayDuration;
  }

  getCycleProgress() {
    return this.time / this.cycleDuration;
  }
}
