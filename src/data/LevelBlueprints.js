import { TILE_TYPES } from './constants.js';

export const LEVEL_BLUEPRINTS = {
  1: {
    id: 1,
    name: "Nocturne in Dusk Hollow",
    subtitle: "Chapter I: The Rain-Soaked Parish",
    themeId: 1,
    chapter: "Chapter I",
    introText: "The Cathedral of the Sacred Dawn has stood for centuries, cleansing the land of your breed. Tonight, the bells toll for them.",
    width: 60,
    height: 50,
    playerSpawn: { x: 30, y: 47 },
    objectives: [
      { id: 'find_key', text: 'Retrieve the Cathedral Key from the Keykeeper Guard', completed: false, required: true },
      { id: 'unlock_gate', text: 'Unlock the Cathedral Doors to the North', completed: false, required: true },
      { id: 'assassinate_aldric', text: 'Assassinate Brother Aldric', completed: false, required: true },
      { id: 'stealth_bonus', text: 'Stealth Executioner (Assassinate 2 guards from shadows)', completed: false, required: false },
      { id: 'read_lore', text: 'Discover hidden lore in Dusk Hollow', completed: false, required: false }
    ],
    spawns: [
      // Boss
      { type: 'boss', subType: 'boss_aldric', x: 30, y: 8, name: "Brother Aldric" },
      
      // Enemies - Cathedral Elite Guard
      { type: 'enemy', subType: 'keykeeper', x: 45, y: 25, patrolRadius: 40, patrolType: 'patrol' },
      
      // Enemies - Courtyard patrols
      { type: 'enemy', subType: 'guard', x: 20, y: 25, patrolRadius: 60, patrolType: 'patrol' },
      { type: 'enemy', subType: 'guard', x: 30, y: 22, patrolRadius: 0, patrolType: 'stationary' },
      
      // Enemies - Slums/Town Square patrols
      { type: 'enemy', subType: 'guard', x: 15, y: 40, patrolRadius: 50, patrolType: 'patrol' },
      { type: 'enemy', subType: 'guard', x: 45, y: 40, patrolRadius: 50, patrolType: 'patrol' },
      { type: 'enemy', subType: 'guard', x: 30, y: 34, patrolRadius: 30, patrolType: 'patrol' }, // Guarding fountain
      
      // Enemies - Stationary chokepoint guards
      { type: 'enemy', subType: 'guard', x: 26, y: 30, patrolRadius: 0, patrolType: 'stationary' },
      { type: 'enemy', subType: 'guard', x: 34, y: 30, patrolRadius: 0, patrolType: 'stationary' },
      
      // Lore nodes & static details
      { type: 'lore_node', x: 14, y: 24, text: "Tombstone: 'Father Marcus, Founder of Dusk Hollow. He died praying for a light that never came.'" },
      { type: 'lore_node', x: 46, y: 24, text: "Tombstone: 'Sister Elena. Struck down during the Purge of the Eclipse. May her soul find peace.'" },
      { type: 'lore_node', x: 30, y: 6, text: "Altar: 'A desecrated chalice sits on the blood-spattered stone. An ancient inscription reads: Feed on the righteous to fuel the dark.'" },
      { type: 'lore_node', x: 12, y: 46, text: "Discarded Journal: 'The curfew is absolute. They say the Inquisition protects us, but I hear screams from the Cathedral at night.'" },
      { type: 'lore_node', x: 48, y: 46, text: "Wanted Poster: 'Bounty for the Night Stalker. Last seen in the slums. Beware, it feeds on blood.'" }
    ],
    buildLayers() {
      const w = this.width;
      const h = this.height;
      const ground = new Array(w * h).fill(TILE_TYPES.GRASS);
      const objects = new Array(w * h).fill(TILE_TYPES.EMPTY);

      const drawRect = (startX, startY, endX, endY, tileType, layer) => {
        for (let y = startY; y <= endY; y++) {
          for (let x = startX; x <= endX; x++) {
            layer[y * w + x] = tileType;
          }
        }
      };

      const drawBox = (startX, startY, endX, endY, tileType, layer) => {
        for (let x = startX; x <= endX; x++) {
          layer[startY * w + x] = tileType;
          layer[endY * w + x] = tileType;
        }
        for (let y = startY; y <= endY; y++) {
          layer[y * w + startX] = tileType;
          layer[y * w + endX] = tileType;
        }
      };

      // --- Ground Layout ---
      // Slums & Town Square (Bottom half)
      drawRect(10, 28, 50, 48, TILE_TYPES.COBBLE, ground);
      // Main Path to Cathedral
      drawRect(26, 16, 34, 28, TILE_TYPES.COBBLE, ground);
      // Cathedral Courtyard / Graveyard
      drawRect(10, 16, 50, 28, TILE_TYPES.GRASS, ground);
      for (let y = 16; y < 28; y++) {
        for (let x = 10; x <= 50; x++) {
          if (Math.random() < 0.2) ground[y * w + x] = TILE_TYPES.COBBLE;
        }
      }
      // Cathedral Interior
      drawRect(20, 4, 40, 16, TILE_TYPES.CHURCH, ground);
      
      // --- Structural Walls ---
      // Outer Boundary
      drawBox(8, 2, 52, 49, TILE_TYPES.WALL, objects);
      
      // Cathedral Walls
      drawBox(20, 4, 40, 16, TILE_TYPES.WALL, objects);
      objects[8 * w + 24] = TILE_TYPES.WALL;
      objects[12 * w + 24] = TILE_TYPES.WALL;
      objects[8 * w + 36] = TILE_TYPES.WALL;
      objects[12 * w + 36] = TILE_TYPES.WALL;

      // Graveyard enclosing wall
      for(let x=8; x<=52; x++) {
        if (x < 26 || x > 34) objects[16 * w + x] = TILE_TYPES.WALL;
      }
      
      // Slums Houses
      // Left side houses
      drawBox(10, 36, 18, 42, TILE_TYPES.WALL, objects);
      for(let x=11; x<=17; x++) for(let y=37; y<=41; y++) objects[y*w+x] = TILE_TYPES.EMPTY;
      objects[42 * w + 14] = TILE_TYPES.DOOR;

      drawBox(10, 28, 16, 33, TILE_TYPES.WALL, objects);
      for(let x=11; x<=15; x++) for(let y=29; y<=32; y++) objects[y*w+x] = TILE_TYPES.EMPTY;
      objects[33 * w + 13] = TILE_TYPES.DOOR;

      // Right side houses
      drawBox(42, 38, 50, 44, TILE_TYPES.WALL, objects);
      for(let x=43; x<=49; x++) for(let y=39; y<=43; y++) objects[y*w+x] = TILE_TYPES.EMPTY;
      objects[44 * w + 46] = TILE_TYPES.DOOR;

      drawBox(44, 29, 50, 35, TILE_TYPES.WALL, objects);
      for(let x=45; x<=49; x++) for(let y=30; y<=34; y++) objects[y*w+x] = TILE_TYPES.EMPTY;
      objects[35 * w + 47] = TILE_TYPES.DOOR;

      // --- Interactive / Details ---
      objects[49 * w + 30] = TILE_TYPES.DOOR;
      objects[16 * w + 30] = TILE_TYPES.DOOR;
      objects[16 * w + 29] = TILE_TYPES.DOOR;
      objects[16 * w + 31] = TILE_TYPES.DOOR;

      // Town Square Fountain
      drawRect(28, 33, 32, 35, TILE_TYPES.WATER, objects);
      
      // Stealth Bushes - Alleys and Graveyard
      const bushSpots = [
        {x: 19, y: 38}, {x: 19, y: 39}, {x: 19, y: 40},
        {x: 41, y: 40}, {x: 41, y: 41}, {x: 41, y: 42},
        {x: 14, y: 25}, {x: 15, y: 25}, {x: 16, y: 25}, {x: 14, y: 26},
        {x: 44, y: 25}, {x: 45, y: 25}, {x: 46, y: 25}, {x: 46, y: 26},
        {x: 24, y: 20}, {x: 24, y: 21},
        {x: 36, y: 20}, {x: 36, y: 21},
        {x: 27, y: 27}, {x: 33, y: 27}
      ];
      for (let spot of bushSpots) {
        objects[spot.y * w + spot.x] = TILE_TYPES.BUSH;
      }

      objects[24 * w + 14] = TILE_TYPES.LORE_NODE;
      objects[24 * w + 46] = TILE_TYPES.LORE_NODE;
      objects[6 * w + 30] = TILE_TYPES.LORE_NODE;
      objects[46 * w + 12] = TILE_TYPES.LORE_NODE;
      objects[46 * w + 48] = TILE_TYPES.LORE_NODE;

      for(let x=28; x<=32; x++) for(let y=46; y<=49; y++) objects[y*w+x] = TILE_TYPES.EMPTY;

      return [ground, objects];
    }
  },
  2: {
    id: 2,
    name: "Crimson Catacombs",
    subtitle: "Chapter II: The Bone Crypts Below",
    themeId: 2,
    chapter: "Chapter II",
    introText: "Descending beneath the ruined cathedral, you enter the ancient bone crypts. The Inquisition conducts their dark rituals in the shadows.",
    width: 60,
    height: 50,
    playerSpawn: { x: 30, y: 44 },
    objectives: [
      { id: 'extinguish_braziers', text: 'Extinguish 3 Holy Braziers to dim the cathedral light', completed: false, required: true },
      { id: 'slay_inquisitor', text: 'Slay Inquisitor Malakai', completed: false, required: true }
    ],
    spawns: [
      { type: 'boss', subType: 'boss_malakai', x: 30, y: 15, name: "Inquisitor Malakai" }
    ],
    buildLayers() {
      // Basic layout builder for level 2
      const w = this.width;
      const h = this.height;
      const ground = new Array(w * h).fill(TILE_TYPES.COBBLE);
      const objects = new Array(w * h).fill(TILE_TYPES.EMPTY);
      // Outer border
      for (let x = 0; x < w; x++) {
        objects[x] = TILE_TYPES.WALL;
        objects[(h - 1) * w + x] = TILE_TYPES.WALL;
      }
      for (let y = 0; y < h; y++) {
        objects[y * w] = TILE_TYPES.WALL;
        objects[y * w + (w - 1)] = TILE_TYPES.WALL;
      }
      return [ground, objects];
    }
  },
  3: {
    id: 3,
    name: "Frozen Graveyard",
    subtitle: "Chapter III: The Moonlit Cemetery",
    themeId: 3,
    chapter: "Chapter III",
    introText: "Under the silver light of a waning moon, the frozen cemetery lies silent. Ethereal forces guard the crypt of the ancient lords.",
    width: 60,
    height: 50,
    playerSpawn: { x: 30, y: 44 },
    objectives: [
      { id: 'find_relics', text: 'Collect 2 Ethereal Relics', completed: false, required: true },
      { id: 'slay_wraith', text: 'Defeat the Crypt Wraith', completed: false, required: true }
    ],
    spawns: [
      { type: 'boss', subType: 'boss_wraith', x: 30, y: 15, name: "Crypt Wraith" }
    ],
    buildLayers() {
      const w = this.width;
      const h = this.height;
      const ground = new Array(w * h).fill(TILE_TYPES.GRASS);
      const objects = new Array(w * h).fill(TILE_TYPES.EMPTY);
      return [ground, objects];
    }
  },
  4: {
    id: 4,
    name: "Infernal Sanctum",
    subtitle: "Chapter IV: The Volcanic Cathedral",
    themeId: 4,
    chapter: "Chapter IV",
    introText: "The smell of sulfur and boiling magma fills the air. You stand at the gates of the sanctuary where the Grand Inquisitor channels holy flame.",
    width: 60,
    height: 50,
    playerSpawn: { x: 30, y: 44 },
    objectives: [
      { id: 'cross_lava', text: 'Find a way to cross the lava canal', completed: false, required: true },
      { id: 'slay_ignis', text: 'Defeat Grand Inquisitor Ignis', completed: false, required: true }
    ],
    spawns: [
      { type: 'boss', subType: 'boss_ignis', x: 30, y: 15, name: "Grand Inquisitor Ignis" }
    ],
    buildLayers() {
      const w = this.width;
      const h = this.height;
      const ground = new Array(w * h).fill(TILE_TYPES.COBBLE);
      const objects = new Array(w * h).fill(TILE_TYPES.EMPTY);
      return [ground, objects];
    }
  },
  5: {
    id: 5,
    name: "Obsidian Throne",
    subtitle: "Chapter V: The Void Beyond",
    themeId: 5,
    chapter: "Chapter V",
    introText: "The sky cracks open, revealing the void of space. The Obsidian Throne stands before you, occupied by the Pope of the Ash Inquisition.",
    width: 60,
    height: 50,
    playerSpawn: { x: 30, y: 44 },
    objectives: [
      { id: 'reach_throne', text: 'Approach the Obsidian Throne', completed: false, required: true },
      { id: 'slay_pope', text: 'Vanquish Pope Benedictus', completed: false, required: true }
    ],
    spawns: [
      { type: 'boss', subType: 'boss_benedictus', x: 30, y: 15, name: "Pope Benedictus" }
    ],
    buildLayers() {
      const w = this.width;
      const h = this.height;
      const ground = new Array(w * h).fill(TILE_TYPES.CHURCH);
      const objects = new Array(w * h).fill(TILE_TYPES.EMPTY);
      return [ground, objects];
    }
  }
};
