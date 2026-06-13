import * as THREE from 'three';

export class Particles {
  constructor(scene) {
    this.scene = scene;
    this.particles = [];
    
    // Geometry pool
    this.planeGeo = new THREE.PlaneGeometry(1, 1);
    this.boxGeo = new THREE.BoxGeometry(1, 1, 1);
  }

  /**
   * Spawn particles of various types.
   * Types: blood, hit, slash_trail, holy_pillar, consecrate, stagger_stars, snow, embers, void, dust
   */
  spawn(x, y, type, count) {
    for (let i = 0; i < count; i++) {
      let p = this._createParticle(x, y, type);
      if (p) {
        this.scene.add(p.mesh);
        this.particles.push(p);
      }
    }
  }

  _createParticle(x, y, type) {
    let color, size, life, vx, vy, vz, pType, geo, posY;
    const r = () => (Math.random() - 0.5);

    switch (type) {
      case 'blood':
        color = new THREE.Color().setHSL(0, 0.8, 0.15 + Math.random() * 0.15);
        size = 1.5 + Math.random() * 2.5;
        life = 0.8 + Math.random() * 0.6;
        vx = r() * 80; vy = 30 + Math.random() * 40; vz = r() * 80;
        pType = 'gravity';
        geo = this.planeGeo;
        posY = 6 + Math.random() * 6;
        break;

      case 'hit':
        color = new THREE.Color(0xffffff);
        size = 1 + Math.random() * 2;
        life = 0.15 + Math.random() * 0.1;
        vx = r() * 120; vy = r() * 120; vz = r() * 120;
        pType = 'spark';
        geo = this.planeGeo;
        posY = 8;
        break;

      case 'slash_trail':
        color = new THREE.Color().setHSL(0, 0.9, 0.45 + Math.random() * 0.1);
        size = 2 + Math.random() * 3;
        life = 0.2 + Math.random() * 0.15;
        vx = r() * 30; vy = r() * 20; vz = r() * 30;
        pType = 'fade';
        geo = this.planeGeo;
        posY = 8 + Math.random() * 6;
        break;

      case 'holy_pillar':
        color = new THREE.Color().setHSL(0.12, 0.9, 0.5 + Math.random() * 0.2);
        size = 1.5 + Math.random() * 2;
        life = 0.6 + Math.random() * 0.4;
        vx = r() * 15; vy = 40 + Math.random() * 60; vz = r() * 15;
        pType = 'rise';
        geo = this.planeGeo;
        posY = 0;
        break;

      case 'consecrate':
        color = new THREE.Color().setHSL(0.12, 0.8, 0.4 + Math.random() * 0.2);
        size = 3 + Math.random() * 4;
        life = 2.0 + Math.random() * 1.0;
        vx = r() * 5; vy = 1 + Math.random() * 3; vz = r() * 5;
        pType = 'ground_glow';
        geo = this.planeGeo;
        posY = 0.2;
        break;

      case 'stagger_stars':
        color = new THREE.Color(0xffffff);
        size = 0.8 + Math.random() * 1;
        life = 0.4 + Math.random() * 0.2;
        const angle = Math.random() * Math.PI * 2;
        const spd = 20 + Math.random() * 30;
        vx = Math.cos(angle) * spd; vy = 15 + Math.random() * 20; vz = Math.sin(angle) * spd;
        pType = 'spark';
        geo = this.boxGeo;
        posY = 16;
        break;

      case 'snow':
        color = new THREE.Color().setHSL(0.6, 0.1, 0.85 + Math.random() * 0.15);
        size = 0.8 + Math.random() * 1.2;
        life = 3.0 + Math.random() * 2.0;
        vx = r() * 8 + 3; vy = -(4 + Math.random() * 4); vz = r() * 8;
        pType = 'float';
        geo = this.boxGeo;
        posY = 40 + Math.random() * 30;
        break;

      case 'embers':
        color = new THREE.Color().setHSL(0.05 + Math.random() * 0.05, 0.9, 0.4 + Math.random() * 0.2);
        size = 0.5 + Math.random() * 1.2;
        life = 1.5 + Math.random() * 2.0;
        vx = r() * 10; vy = 15 + Math.random() * 25; vz = r() * 10;
        pType = 'rise';
        geo = this.boxGeo;
        posY = 0;
        break;

      case 'void':
        color = new THREE.Color().setHSL(0.75 + Math.random() * 0.1, 0.6, 0.3 + Math.random() * 0.2);
        size = 1 + Math.random() * 2;
        life = 2.0 + Math.random() * 3.0;
        vx = r() * 6; vy = r() * 8; vz = r() * 6;
        pType = 'float';
        geo = this.boxGeo;
        posY = 5 + Math.random() * 25;
        break;

      case 'dust':
        color = new THREE.Color().setHSL(0.08, 0.3, 0.3 + Math.random() * 0.1);
        size = 0.5 + Math.random() * 0.8;
        life = 2.0 + Math.random() * 2.0;
        vx = r() * 4; vy = r() * 2 + 1; vz = r() * 4;
        pType = 'float';
        geo = this.boxGeo;
        posY = 2 + Math.random() * 15;
        break;

      case 'boss_transition':
        color = new THREE.Color().setHSL(0.1, 1.0, 0.5 + Math.random() * 0.2);
        size = 2 + Math.random() * 4;
        life = 1.0 + Math.random() * 0.5;
        const a2 = Math.random() * Math.PI * 2;
        const s2 = 40 + Math.random() * 80;
        vx = Math.cos(a2) * s2; vy = 20 + Math.random() * 40; vz = Math.sin(a2) * s2;
        pType = 'gravity';
        geo = this.planeGeo;
        posY = 10;
        break;

      case 'shield_glow':
        color = new THREE.Color().setHSL(0.12, 0.9, 0.6 + Math.random() * 0.2);
        size = 2 + Math.random() * 3;
        life = 0.3 + Math.random() * 0.3;
        const a3 = Math.random() * Math.PI * 2;
        const rad = 15 + Math.random() * 10;
        vx = Math.cos(a3) * 5; vy = 5 + Math.random() * 10; vz = Math.sin(a3) * 5;
        pType = 'fade';
        geo = this.planeGeo;
        posY = 5 + Math.random() * 15;
        // Override position to be on sphere
        x += Math.cos(a3) * rad;
        y += Math.sin(a3) * rad;
        break;

      default:
        return null;
    }

    const mat = new THREE.MeshBasicMaterial({ 
      color, 
      transparent: true, 
      opacity: 1.0,
      depthWrite: false,
      side: THREE.DoubleSide,
    });
    
    const mesh = new THREE.Mesh(geo, mat);
    mesh.scale.set(size, size, size);
    
    const px = x + (Math.random() - 0.5) * 12;
    const pz = y + (Math.random() - 0.5) * 12;
    mesh.position.set(px, posY, pz);

    return {
      mesh,
      x: px,
      y: posY,
      z: pz,
      vx, vy, vz,
      life,
      maxLife: life,
      size,
      type: pType,
    };
  }

  update(dt) {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.life -= dt;
      
      if (p.life <= 0) {
        this.scene.remove(p.mesh);
        p.mesh.material.dispose();
        this.particles.splice(i, 1);
        continue;
      }

      // Physics by type
      switch (p.type) {
        case 'gravity':
          p.vy -= 300 * dt;
          if (p.y < 0.1) {
            p.y = 0.1;
            p.vy = 0;
            p.vx *= 0.5;
            p.vz *= 0.5;
          }
          break;

        case 'spark':
          p.vx *= (1 - 6 * dt);
          p.vy *= (1 - 6 * dt);
          p.vz *= (1 - 6 * dt);
          break;

        case 'fade':
          p.vx *= (1 - 4 * dt);
          p.vy *= (1 - 4 * dt);
          p.vz *= (1 - 4 * dt);
          break;

        case 'rise':
          p.vx *= (1 - 2 * dt);
          p.vz *= (1 - 2 * dt);
          // Slight sine wobble
          p.vx += Math.sin(Date.now() / 200 + i) * 2;
          break;

        case 'ground_glow':
          p.vx *= (1 - 3 * dt);
          p.vz *= (1 - 3 * dt);
          break;

        case 'float':
          // Gentle drifting with sine wobble
          p.vx += Math.sin(Date.now() / 500 + i * 0.7) * 0.5;
          p.vz += Math.cos(Date.now() / 600 + i * 1.3) * 0.5;
          break;
      }

      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.z += p.vz * dt;

      p.mesh.position.set(p.x, p.y, p.z);
      
      // Opacity fade out
      const lifeRatio = p.life / p.maxLife;
      p.mesh.material.opacity = Math.max(0, lifeRatio);
      
      // Size pulse for certain types
      if (p.type === 'ground_glow') {
        const pulse = 1 + Math.sin(Date.now() / 200) * 0.2;
        p.mesh.scale.set(p.size * pulse, p.size * pulse, 1);
      }

      // Billboarding
      p.mesh.lookAt(p.mesh.position.x, 150, p.mesh.position.z + 150);
    }
  }

  // Clear all particles
  clear() {
    for (let p of this.particles) {
      this.scene.remove(p.mesh);
      p.mesh.material.dispose();
    }
    this.particles = [];
  }
}
