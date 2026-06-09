// Game Constants from GDD

export const GAME = {
  TITLE: "Crimson Awakening",
  TARGET_WIDTH: 1280,
  TARGET_HEIGHT: 720,
  TARGET_FPS: 60,
  TILE_SIZE: 16,
};

export const WORLD = {
  WIDTH_TILES: 80,
  HEIGHT_TILES: 60,
};

export const PLAYER = {
  START_HP: 100,
  MAX_BLOOD: 100,
  WALK_SPEED: 3, // tiles per second
  RUN_SPEED: 5.5,
  BAT_SPEED: 8,
  DODGE_I_FRAMES: 12,
  DODGE_COOLDOWN_MS: 800,
  BLOOD_DRAIN_RATE_DAY: 0.5, // per sec
  BLOOD_DRAIN_RATE_NIGHT: 0.1, // per sec
};

export const COMBAT = {
  SLASH_DMG: 12,
  SLASH_CD_MS: 400,
  SLASH_RANGE_TILES: 1,
  CLAW_DMG: 8,
  CLAW_CD_MS: 600,
  CLAW_RANGE_TILES: 1.5,
};

export const DAY_NIGHT = {
  CYCLE_DURATION_MINS: 6,
  DAY_RATIO: 0.4,
  NIGHT_RATIO: 0.6,
  TRANSITION_SEC: 30,
};

export const TILE_TYPES = {
  EMPTY: 0,
  GRASS: 1,
  COBBLE: 2,
  WALL: 3,
  WATER: 4,
  CHURCH: 5,
  DOOR: 6,
};

export const GAME_STATES = {
  MENU: 'MENU',
  PLAYING: 'PLAYING',
  PAUSED: 'PAUSED',
  BOSS_INTRO: 'BOSS_INTRO',
  GAME_OVER: 'GAME_OVER'
};
