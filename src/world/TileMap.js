import * as THREE from 'three';
import { GAME, TILE_TYPES } from '../data/constants.js';

export class TileMap {
  constructor(mapData, assetGen, scene) {
    this.width = mapData.width;
    this.height = mapData.height;
    this.layers = mapData.layers; // Array of 1D arrays
    this.assetGen = assetGen;
    this.scene = scene;
    
    this.doorMeshes = {};
    this.keyMeshes = {};
    this.loreMeshes = {};
    
    this.generate3D(scene);
  }

  isSolid(col, row) {
    if (col < 0 || col >= this.width || row < 0 || row >= this.height) return true;
    
    // Check object layer for solids (walls, water, locked doors)
    const objLayer = this.layers[1];
    if (objLayer) {
      const tile = objLayer[row * this.width + col];
      if (tile === TILE_TYPES.WALL || tile === TILE_TYPES.WATER || tile === TILE_TYPES.DOOR) {
        return true;
      }
    }
    return false;
  }

  unlockDoor(col, row) {
    const key = `${col},${row}`;
    const mesh = this.doorMeshes[key];
    if (mesh) {
      this.scene.remove(mesh);
      if (mesh.geometry) mesh.geometry.dispose();
      if (mesh.material) {
        if (Array.isArray(mesh.material)) {
          mesh.material.forEach(m => m.dispose());
        } else {
          mesh.material.dispose();
        }
      }
      delete this.doorMeshes[key];
    }
    const idx = row * this.width + col;
    if (this.layers[1][idx] === TILE_TYPES.DOOR) {
      this.layers[1][idx] = TILE_TYPES.EMPTY;
    }
  }

  fadeLoreNode(col, row) {
    const key = `${col},${row}`;
    const mesh = this.loreMeshes[key];
    if (mesh) {
      mesh.traverse(child => {
        if (child.isMesh) {
          child.material = child.material.clone();
          child.material.transparent = true;
          child.material.opacity = 0.4;
        }
      });
    }
  }

  removeKey(col, row) {
    const key = `${col},${row}`;
    const mesh = this.keyMeshes[key];
    if (mesh) {
      this.scene.remove(mesh);
      if (mesh.geometry) mesh.geometry.dispose();
      if (mesh.material) {
        if (Array.isArray(mesh.material)) {
          mesh.material.forEach(m => m.dispose());
        } else {
          mesh.material.dispose();
        }
      }
      delete this.keyMeshes[key];
    }
    const idx = row * this.width + col;
    if (this.layers[1][idx] === TILE_TYPES.KEY) {
      this.layers[1][idx] = TILE_TYPES.EMPTY;
    }
  }

  generate3D(scene) {
    const s = GAME.TILE_SIZE;
    
    // Material cache
    const materials = {};
    for (let key in this.assetGen.tiles) {
      materials[key] = new THREE.MeshLambertMaterial({ 
        map: this.assetGen.tiles[key]
      });
    }

    const planeGeo = new THREE.PlaneGeometry(s, s);
    planeGeo.rotateX(-Math.PI / 2); // Lay flat
    
    const boxGeo = new THREE.BoxGeometry(s, s * 2, s); // Walls/doors are 2 tiles high
    boxGeo.translate(0, s, 0); // Shift origin so bottom sits on floor

    const bushGeo = new THREE.BoxGeometry(s, s * 0.8, s);
    bushGeo.translate(0, s * 0.4, 0);

    const tombstoneGeo = new THREE.BoxGeometry(s * 0.6, s * 1.2, s * 0.3);
    tombstoneGeo.translate(0, s * 0.6, 0);

    const keyGeo = new THREE.BoxGeometry(s * 0.4, s * 0.1, s * 0.4);
    keyGeo.translate(0, 0.2, 0);
    
    // Layer 0: Floor
    const floorLayer = this.layers[0];
    if (floorLayer) {
      for (let row = 0; row < this.height; row++) {
        for (let col = 0; col < this.width; col++) {
          const tileType = floorLayer[row * this.width + col];
          if (tileType !== TILE_TYPES.EMPTY && materials[tileType]) {
            const mesh = new THREE.Mesh(planeGeo, materials[tileType]);
            mesh.position.set(col * s, 0, row * s);
            mesh.receiveShadow = true;
            scene.add(mesh);
          }
        }
      }
    }

    // Layer 1: Objects
    const objLayer = this.layers[1];
    if (objLayer) {
      for (let row = 0; row < this.height; row++) {
        for (let col = 0; col < this.width; col++) {
          const tileType = objLayer[row * this.width + col];
          if (tileType !== TILE_TYPES.EMPTY && materials[tileType]) {
            let mesh;
            if (tileType === TILE_TYPES.WALL) {
              mesh = new THREE.Mesh(boxGeo, materials[tileType]);
              mesh.position.set(col * s, 0, row * s);
              mesh.castShadow = true;
              mesh.receiveShadow = true;
              scene.add(mesh);
            } else if (tileType === TILE_TYPES.DOOR) {
              mesh = new THREE.Mesh(boxGeo, materials[tileType]);
              mesh.position.set(col * s, 0, row * s);
              mesh.castShadow = true;
              mesh.receiveShadow = true;
              scene.add(mesh);
              this.doorMeshes[`${col},${row}`] = mesh;
            } else if (tileType === TILE_TYPES.BUSH) {
              mesh = new THREE.Mesh(bushGeo, materials[tileType]);
              mesh.position.set(col * s, 0, row * s);
              mesh.castShadow = true;
              mesh.receiveShadow = true;
              scene.add(mesh);
            } else if (tileType === TILE_TYPES.LORE_NODE) {
              mesh = new THREE.Mesh(tombstoneGeo, materials[tileType]);
              mesh.position.set(col * s, 0, row * s);
              mesh.castShadow = true;
              mesh.receiveShadow = true;
              scene.add(mesh);
              this.loreMeshes[`${col},${row}`] = mesh;
            } else if (tileType === TILE_TYPES.KEY) {
              mesh = new THREE.Mesh(keyGeo, materials[tileType]);
              mesh.position.set(col * s, 0.2, row * s);
              mesh.castShadow = true;
              mesh.receiveShadow = true;
              scene.add(mesh);
              this.keyMeshes[`${col},${row}`] = mesh;
            } else {
              mesh = new THREE.Mesh(planeGeo, materials[tileType]);
              mesh.position.set(col * s, 0.1, row * s); // Prevent z-fighting
              mesh.receiveShadow = true;
              scene.add(mesh);
            }
          }
        }
      }
    }
  }
}
