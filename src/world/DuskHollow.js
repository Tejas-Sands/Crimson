import { TILE_TYPES } from '../data/constants.js';

// Procedurally generate a simple town layout for prototype
const w = 60;
const h = 50;

const groundLayer = new Array(w * h).fill(TILE_TYPES.GRASS);
const objectLayer = new Array(w * h).fill(TILE_TYPES.EMPTY);

// Draw town square (cobble)
for (let y = 10; y < 35; y++) {
  for (let x = 15; x < 45; x++) {
    groundLayer[y * w + x] = TILE_TYPES.COBBLE;
  }
}

// Draw church floor
for (let y = 5; y < 15; y++) {
  for (let x = 25; x < 35; x++) {
    groundLayer[y * w + x] = TILE_TYPES.CHURCH;
  }
}

// Add walls around town
for (let x = 10; x < 50; x++) {
  objectLayer[10 * w + x] = TILE_TYPES.WALL; // Top wall
  objectLayer[35 * w + x] = TILE_TYPES.WALL; // Bottom wall
}
for (let y = 10; y <= 35; y++) {
  objectLayer[y * w + 10] = TILE_TYPES.WALL; // Left wall
  objectLayer[y * w + 50] = TILE_TYPES.WALL; // Right wall
}

// Add gates/doors
objectLayer[10 * w + 30] = TILE_TYPES.DOOR; // Church door
objectLayer[35 * w + 30] = TILE_TYPES.DOOR; // South gate

// Add water feature (fountain in center)
for (let y = 21; y <= 23; y++) {
  for (let x = 28; x <= 32; x++) {
    objectLayer[y * w + x] = TILE_TYPES.WATER;
  }
}

export const DuskHollowData = {
  width: w,
  height: h,
  layers: [groundLayer, objectLayer]
};
