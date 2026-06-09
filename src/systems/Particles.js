import * as THREE from 'three';

export class Particles {
  constructor(scene) {
    this.scene = scene;
    this.particles = [];
    
    // Create base materials for particles
    this.matBlood = new THREE.MeshBasicMaterial({ color: 0x800000, transparent: true });
    this.matHit = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true });
    
    this.geo = new THREE.PlaneGeometry(1, 1);
  }

  // Helper to spawn generic particles
  spawn(x, y, type, count) {
    for (let i = 0; i < count; i++) {
      let mat = type === 'blood' ? this.matBlood : this.matHit;
      
      // Use Mesh with PlaneGeometry to face camera (billboard)
      let mesh = new THREE.Mesh(this.geo, mat.clone());
      
      let p = {
        mesh: mesh,
        x: x + (Math.random() - 0.5) * 16,
        y: 8, // Start slightly above ground
        z: y + (Math.random() - 0.5) * 16,
        vx: (Math.random() - 0.5) * 60,
        vy: type === 'blood' ? (30 + Math.random() * 30) : (Math.random() - 0.5) * 100,
        vz: (Math.random() - 0.5) * 60,
        life: type === 'blood' ? (0.8 + Math.random() * 0.4) : 0.2,
        maxLife: type === 'blood' ? 1.2 : 0.2,
        size: type === 'blood' ? (2 + Math.random() * 2) : (1 + Math.random() * 2),
        type: type === 'blood' ? 'gravity' : 'spark'
      };
      
      mesh.scale.set(p.size, p.size, 1);
      mesh.position.set(p.x, p.y, p.z);
      
      this.scene.add(mesh);
      this.particles.push(p);
    }
  }

  update(dt) {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      let p = this.particles[i];
      p.life -= dt;
      
      if (p.life <= 0) {
        this.scene.remove(p.mesh);
        p.mesh.material.dispose();
        this.particles.splice(i, 1);
        continue;
      }

      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.z += p.vz * dt;

      if (p.type === 'gravity') {
        p.vy -= 300 * dt; // Gravity pulls down
        if (p.y < 0.1) {
          p.y = 0.1; // Hit ground
          p.vy = 0;
          p.vx *= 0.5;
          p.vz *= 0.5;
        }
      } else if (p.type === 'spark') {
        p.vx *= 0.9;
        p.vy *= 0.9;
        p.vz *= 0.9;
      }

      p.mesh.position.set(p.x, p.y, p.z);
      p.mesh.material.opacity = Math.max(0, p.life / p.maxLife);
      
      // Make particles face the camera (simple billboarding)
      p.mesh.lookAt(p.mesh.position.x, 150, p.mesh.position.z + 150);
    }
  }
}
