import * as THREE from 'three';
import { GAME, TILE_TYPES } from '../data/constants.js';

export class TileMap {
  constructor(mapData, assetGen, scene) {
    this.width = mapData.width;
    this.height = mapData.height;
    this.layers = mapData.layers; // Array of 1D arrays
    this.assetGen = assetGen;
    
    this.generate3D(scene);
  }

  isSolid(col, row) {
    if (col < 0 || col >= this.width || row < 0 || row >= this.height) return true;
    
    // Check object layer for solids (walls, water)
    const objLayer = this.layers[1];
    if (objLayer) {
      const tile = objLayer[row * this.width + col];
      if (tile === TILE_TYPES.WALL || tile === TILE_TYPES.WATER) {
        return true;
      }
    }
    return false;
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
    
    const boxGeo = new THREE.BoxGeometry(s, s * 2, s); // Walls are 2 tiles high
    boxGeo.translate(0, s, 0); // Shift origin so bottom sits on floor
    
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
            } else {
              mesh = new THREE.Mesh(planeGeo, materials[tileType]);
              mesh.position.set(col * s, 0.1, row * s); // Prevent z-fighting
              mesh.receiveShadow = true;
            }
            scene.add(mesh);
          }
        }
      }
    }
  }
}
