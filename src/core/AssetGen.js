import * as THREE from 'three';
import { GAME, TILE_TYPES } from '../data/constants.js';

export class AssetGen {
  constructor() {
    this.tiles = {};
    this.sprites = {};
    this.ui = {};
  }

  generateAll() {
    this.generateTiles();
    this.generateSprites();
    this.generateUI();
    
    // Convert to THREE.CanvasTexture
    for (let key in this.tiles) {
      const tex = new THREE.CanvasTexture(this.tiles[key]);
      tex.magFilter = THREE.NearestFilter; // for pixel art
      tex.minFilter = THREE.NearestFilter;
      this.tiles[key] = tex;
    }
    
    for (let key in this.sprites) {
      const tex = new THREE.CanvasTexture(this.sprites[key]);
      tex.magFilter = THREE.NearestFilter;
      tex.minFilter = THREE.NearestFilter;
      this.sprites[key] = tex;
    }
    // UI remains as raw canvas for DOM extraction
  }

  createCanvas(width, height) {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;
    return { canvas, ctx };
  }

  generateTiles() {
    const s = GAME.TILE_SIZE;
    
    // GRASS (Noir: Dark charcoal ground)
    let c = this.createCanvas(s, s);
    c.ctx.fillStyle = '#141416'; // Base dark charcoal
    c.ctx.fillRect(0, 0, s, s);
    c.ctx.fillStyle = '#1e1e22'; // Highlight
    c.ctx.fillRect(2, 2, 4, 4);
    c.ctx.fillRect(10, 8, 3, 3);
    this.tiles[TILE_TYPES.GRASS] = c.canvas;

    // COBBLE (Noir: Dark grey stone)
    c = this.createCanvas(s, s);
    c.ctx.fillStyle = '#222226';
    c.ctx.fillRect(0, 0, s, s);
    c.ctx.fillStyle = '#32323a';
    c.ctx.fillRect(1, 1, 6, 6);
    c.ctx.fillRect(8, 2, 6, 5);
    c.ctx.fillRect(2, 9, 5, 5);
    c.ctx.fillRect(9, 9, 6, 6);
    this.tiles[TILE_TYPES.COBBLE] = c.canvas;

    // WALL (Noir: Deep black concrete/stone)
    c = this.createCanvas(s, s);
    c.ctx.fillStyle = '#0a0a0d'; // Near black
    c.ctx.fillRect(0, 0, s, s);
    c.ctx.fillStyle = '#18181f';
    c.ctx.fillRect(0, 0, s, s/2 - 1);
    c.ctx.fillRect(0, s/2, s, s/2 - 1);
    this.tiles[TILE_TYPES.WALL] = c.canvas;

    // WATER (Noir: Dark obsidian water)
    c = this.createCanvas(s, s);
    c.ctx.fillStyle = '#050508';
    c.ctx.fillRect(0, 0, s, s);
    c.ctx.fillStyle = '#1b1b22';
    c.ctx.fillRect(2, 4, 8, 2);
    c.ctx.fillRect(6, 10, 6, 2);
    this.tiles[TILE_TYPES.WATER] = c.canvas;

    // CHURCH FLOOR (Noir: Stark silver and black tiles)
    c = this.createCanvas(s, s);
    c.ctx.fillStyle = '#141416'; // Very dark tile
    c.ctx.fillRect(0, 0, s, s);
    c.ctx.fillStyle = '#a0a0a8'; // Stark white/silver tile
    c.ctx.fillRect(0, 0, s/2, s/2);
    c.ctx.fillRect(s/2, s/2, s/2, s/2);
    this.tiles[TILE_TYPES.CHURCH] = c.canvas;

    // DOOR (Noir: Charcoal wood door)
    c = this.createCanvas(s, s);
    c.ctx.fillStyle = '#26262b'; 
    c.ctx.fillRect(0, 0, s, s);
    c.ctx.fillStyle = '#000';
    c.ctx.fillRect(12, 8, 2, 2); // Handle
    this.tiles[TILE_TYPES.DOOR] = c.canvas;
  }

  generateSprites() {
    const s = GAME.TILE_SIZE;

    // Player (Idle/Walk Frame 1)
    let c = this.createCanvas(s, s);
    c.ctx.fillStyle = '#0d0d0f'; // Dark outline / shadows
    c.ctx.fillRect(4, 2, 8, 14); // Body
    c.ctx.fillStyle = '#e74c3c'; // Vibrant crimson cape (Stands out in noir!)
    c.ctx.fillRect(3, 4, 10, 10);
    c.ctx.fillStyle = '#f5f5f7'; // Ghostly white pale skin
    c.ctx.fillRect(6, 2, 4, 4); // Head
    this.sprites.player = c.canvas;

    // Player Bat Form
    c = this.createCanvas(s, s);
    c.ctx.fillStyle = '#0a0a0c'; // Pitch black bat
    c.ctx.fillRect(6, 6, 4, 4); // Body
    c.ctx.beginPath(); // Wings
    c.ctx.moveTo(6, 8); c.ctx.lineTo(0, 4); c.ctx.lineTo(2, 10); c.ctx.fill();
    c.ctx.moveTo(10, 8); c.ctx.lineTo(16, 4); c.ctx.lineTo(14, 10); c.ctx.fill();
    // Glowing red vampire eyes in bat form
    c.ctx.fillStyle = '#e74c3c';
    c.ctx.fillRect(7, 6, 1, 1);
    c.ctx.fillRect(8, 6, 1, 1);
    this.sprites.bat = c.canvas;

    // Guard Enemy (Noir: Steel grey armor, cold metal helmet)
    c = this.createCanvas(s, s);
    c.ctx.fillStyle = '#2d2d33'; // Charcoal armor
    c.ctx.fillRect(4, 2, 8, 14);
    c.ctx.fillStyle = '#9c9ca3'; // Dimmish metal helmet
    c.ctx.fillRect(5, 2, 6, 5);
    this.sprites.guard = c.canvas;

    // Boss Aldric (32x32)
    c = this.createCanvas(32, 32);
    c.ctx.fillStyle = '#1a1a1f'; // Pitch black robes
    c.ctx.fillRect(8, 4, 16, 28);
    c.ctx.fillStyle = '#ffffff'; // Stark white trim (replaces gold)
    c.ctx.fillRect(10, 6, 12, 4);
    c.ctx.fillStyle = '#f0f0f5'; // Cold white hair/beard
    c.ctx.fillRect(12, 2, 8, 6);
    c.ctx.fillStyle = '#3c3c43'; // Steel staff
    c.ctx.fillRect(24, 2, 2, 30);
    this.sprites.aldric = c.canvas;
  }

  generateUI() {
    // Health Heart
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

    // Blood Drop
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
