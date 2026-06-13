import * as THREE from 'three';
import { GAME, TILE_TYPES } from '../data/constants.js';
import { ThemeManager } from '../world/ThemeManager.js';

export class AssetGen {
  constructor() {
    this.tiles = {};
    this.sprites = {};
    this.ui = {};
  }

  generateAll(themeId = 1) {
    this.generateThemeTiles(themeId);
    this.generateSprites();
    this.generateUI();
    
    for (let key in this.tiles) {
      const tex = new THREE.CanvasTexture(this.tiles[key]);
      tex.magFilter = THREE.NearestFilter;
      tex.minFilter = THREE.NearestFilter;
      this.tiles[key] = tex;
    }
    
    for (let key in this.sprites) {
      const tex = new THREE.CanvasTexture(this.sprites[key]);
      tex.magFilter = THREE.NearestFilter;
      tex.minFilter = THREE.NearestFilter;
      this.sprites[key] = tex;
    }
  }

  createCanvas(width, height) {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;
    return { canvas, ctx };
  }

  generateThemeTiles(themeId) {
    const theme = ThemeManager.getTheme(themeId);
    const palette = theme.tiles;
    const s = GAME.TILE_SIZE;
    
    // GRASS
    let c = this.createCanvas(s, s);
    c.ctx.fillStyle = palette.grass.base;
    c.ctx.fillRect(0, 0, s, s);
    c.ctx.fillStyle = palette.grass.highlight;
    c.ctx.fillRect(2, 2, 4, 4);
    c.ctx.fillRect(10, 8, 3, 3);
    c.ctx.fillRect(6, 12, 2, 2);
    this.tiles[TILE_TYPES.GRASS] = c.canvas;

    // COBBLE
    c = this.createCanvas(s, s);
    c.ctx.fillStyle = palette.cobble.base;
    c.ctx.fillRect(0, 0, s, s);
    c.ctx.fillStyle = palette.cobble.highlight;
    c.ctx.fillRect(1, 1, 6, 6);
    c.ctx.fillRect(8, 2, 6, 5);
    c.ctx.fillRect(2, 9, 5, 5);
    c.ctx.fillRect(9, 9, 6, 6);
    this.tiles[TILE_TYPES.COBBLE] = c.canvas;

    // WALL
    c = this.createCanvas(s, s);
    c.ctx.fillStyle = palette.wall.base;
    c.ctx.fillRect(0, 0, s, s);
    c.ctx.fillStyle = palette.wall.highlight;
    c.ctx.fillRect(0, 0, s, s/2 - 1);
    c.ctx.fillRect(0, s/2, s, s/2 - 1);
    this.tiles[TILE_TYPES.WALL] = c.canvas;

    // WATER
    c = this.createCanvas(s, s);
    c.ctx.fillStyle = palette.water.base;
    c.ctx.fillRect(0, 0, s, s);
    c.ctx.fillStyle = palette.water.highlight;
    c.ctx.fillRect(2, 4, 8, 2);
    c.ctx.fillRect(6, 10, 6, 2);
    this.tiles[TILE_TYPES.WATER] = c.canvas;

    // CHURCH FLOOR
    c = this.createCanvas(s, s);
    c.ctx.fillStyle = palette.church.base;
    c.ctx.fillRect(0, 0, s, s);
    c.ctx.fillStyle = palette.church.highlight;
    c.ctx.fillRect(0, 0, s/2, s/2);
    c.ctx.fillRect(s/2, s/2, s/2, s/2);
    this.tiles[TILE_TYPES.CHURCH] = c.canvas;

    // DOOR
    c = this.createCanvas(s, s);
    c.ctx.fillStyle = palette.door.base;
    c.ctx.fillRect(0, 0, s, s);
    c.ctx.fillStyle = palette.door.handle;
    c.ctx.fillRect(12, 8, 2, 2);
    this.tiles[TILE_TYPES.DOOR] = c.canvas;

    // BUSH
    c = this.createCanvas(s, s);
    c.ctx.fillStyle = '#0a1a0e'; 
    c.ctx.fillRect(0, 0, s, s);
    c.ctx.fillStyle = '#10301a';
    c.ctx.fillRect(2, 2, 6, 6);
    c.ctx.fillRect(8, 6, 6, 6);
    c.ctx.fillRect(4, 10, 8, 4);
    c.ctx.fillStyle = '#08140b';
    c.ctx.fillRect(1, 9, 2, 2);
    c.ctx.fillRect(10, 1, 2, 2);
    this.tiles[TILE_TYPES.BUSH] = c.canvas;

    // KEY
    c = this.createCanvas(s, s);
    c.ctx.fillStyle = palette.cobble.base;
    c.ctx.fillRect(0, 0, s, s);
    c.ctx.fillStyle = '#ffd700'; 
    c.ctx.fillRect(6, 3, 4, 4);
    c.ctx.fillStyle = palette.cobble.base; 
    c.ctx.fillRect(7, 4, 2, 2);
    c.ctx.fillStyle = '#ffd700';
    c.ctx.fillRect(7, 7, 2, 6);
    c.ctx.fillRect(9, 10, 2, 2);
    c.ctx.fillRect(9, 12, 2, 1);
    this.tiles[TILE_TYPES.KEY] = c.canvas;

    // LORE_NODE
    c = this.createCanvas(s, s);
    c.ctx.fillStyle = palette.cobble.base;
    c.ctx.fillRect(0, 0, s, s);
    c.ctx.fillStyle = '#4a4a55'; 
    c.ctx.fillRect(3, 2, 10, 14);
    c.ctx.fillStyle = '#6a6a75'; 
    c.ctx.fillRect(4, 3, 8, 1); 
    c.ctx.fillStyle = '#2a2a30'; 
    c.ctx.fillRect(7, 5, 2, 6);
    c.ctx.fillRect(5, 7, 6, 2);
    this.tiles[TILE_TYPES.LORE_NODE] = c.canvas;
  }

  generateSprites() {
    const s = GAME.TILE_SIZE;

    let c = this.createCanvas(s, s);
    c.ctx.fillStyle = '#0d0d0f';
    c.ctx.fillRect(4, 2, 8, 14);
    c.ctx.fillStyle = '#e74c3c';
    c.ctx.fillRect(3, 4, 10, 10);
    c.ctx.fillStyle = '#f5f5f7';
    c.ctx.fillRect(6, 2, 4, 4);
    this.sprites.player = c.canvas;

    c = this.createCanvas(s, s);
    c.ctx.fillStyle = '#0a0a0c';
    c.ctx.fillRect(6, 6, 4, 4);
    c.ctx.beginPath();
    c.ctx.moveTo(6, 8); c.ctx.lineTo(0, 4); c.ctx.lineTo(2, 10); c.ctx.fill();
    c.ctx.moveTo(10, 8); c.ctx.lineTo(16, 4); c.ctx.lineTo(14, 10); c.ctx.fill();
    c.ctx.fillStyle = '#e74c3c';
    c.ctx.fillRect(7, 6, 1, 1);
    c.ctx.fillRect(8, 6, 1, 1);
    this.sprites.bat = c.canvas;

    c = this.createCanvas(s, s);
    c.ctx.fillStyle = '#2d2d33';
    c.ctx.fillRect(4, 2, 8, 14);
    c.ctx.fillStyle = '#9c9ca3';
    c.ctx.fillRect(5, 2, 6, 5);
    this.sprites.guard = c.canvas;

    c = this.createCanvas(32, 32);
    c.ctx.fillStyle = '#1a1a1f';
    c.ctx.fillRect(8, 4, 16, 28);
    c.ctx.fillStyle = '#ffffff';
    c.ctx.fillRect(10, 6, 12, 4);
    c.ctx.fillStyle = '#f0f0f5';
    c.ctx.fillRect(12, 2, 8, 6);
    c.ctx.fillStyle = '#3c3c43';
    c.ctx.fillRect(24, 2, 2, 30);
    this.sprites.aldric = c.canvas;
  }

  generateUI() {
    let c = this.createCanvas(16, 16);
    c.ctx.fillStyle = '#e74c3c';
    c.ctx.beginPath();
    c.ctx.arc(4, 5, 4, 0, Math.PI * 2);
    c.ctx.arc(12, 5, 4, 0, Math.PI * 2);
    c.ctx.fill();
    c.ctx.beginPath();
    c.ctx.moveTo(0, 6); c.ctx.lineTo(16, 6); c.ctx.lineTo(8, 15);
    c.ctx.fill();
    this.ui.heart = c.canvas;

    c = this.createCanvas(16, 16);
    c.ctx.fillStyle = '#900';
    c.ctx.beginPath();
    c.ctx.arc(8, 10, 5, 0, Math.PI * 2);
    c.ctx.fill();
    c.ctx.beginPath();
    c.ctx.moveTo(3, 10); c.ctx.lineTo(13, 10); c.ctx.lineTo(8, 2);
    c.ctx.fill();
    this.ui.blood = c.canvas;
  }
}
