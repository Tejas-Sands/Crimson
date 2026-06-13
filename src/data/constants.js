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
  DODGE_IMPULSE: 220, // pixels/sec burst velocity for dodge roll
  BLOOD_DRAIN_RATE_DAY: 0.5, // per sec
  BLOOD_DRAIN_RATE_NIGHT: 0.1, // per sec
  MASS: 1,
  STAGGER_DURATION: 300, // ms
};

export const COMBAT = {
  // Combo system
  COMBO_WINDOW_MS: 600, // time to chain next hit
  COMBO_1_DMG: 10,
  COMBO_1_ARC: 70,        // degrees
  COMBO_1_RECOVERY_MS: 150,
  COMBO_2_DMG: 12,
  COMBO_2_ARC: 90,
  COMBO_2_RECOVERY_MS: 200,
  COMBO_3_DMG: 20,
  COMBO_3_ARC: 120,
  COMBO_3_RECOVERY_MS: 350,
  SLASH_CD_MS: 400,
  SLASH_RANGE_TILES: 1.2,
  CLAW_DMG: 8,
  CLAW_CD_MS: 600,
  CLAW_RANGE_TILES: 1.5,

  // Knockback physics
  BASE_KNOCKBACK: 180, // pixels/sec
  HEAVY_KNOCKBACK: 280,
  FRICTION: 600, // pixels/sec^2 deceleration
  
  // Stagger
  STAGGER_THRESHOLD: 15, // damage needed to stagger

  // Enemy attacks
  ENEMY_THRUST_DMG: 15,
  ENEMY_THRUST_RANGE: 2, // tiles
  ENEMY_THRUST_TELEGRAPH: 0.6, // seconds
  ENEMY_BASH_DMG: 8,
  ENEMY_BASH_RANGE: 1,
  ENEMY_BASH_TELEGRAPH: 0.4,
  ENEMY_BASH_KB_MULT: 2.0, // extra knockback
  ENEMY_SWEEP_DMG: 12,
  ENEMY_SWEEP_RANGE: 1.5,
  ENEMY_SWEEP_TELEGRAPH: 0.8,
  ENEMY_SWEEP_ARC: 180,

  // Boss Aldric
  BOSS_SMITE_DMG: 25,
  BOSS_SMITE_TELEGRAPH: 1.0,
  BOSS_SWEEP_DMG: 18,
  BOSS_SWEEP_TELEGRAPH: 0.8,
  BOSS_SHIELD_DURATION: 3.0,
  BOSS_RAIN_DMG: 20,
  BOSS_RAIN_TELEGRAPH: 0.8,
  BOSS_CHARGE_DMG: 30,
  BOSS_CHARGE_TELEGRAPH: 0.5,
  BOSS_CHARGE_DIST: 4, // tiles
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
  BUSH: 7,
  KEY: 8,
  LORE_NODE: 9,
};

export const GAME_STATES = {
  MENU: 'MENU',
  PROLOGUE: 'PROLOGUE',
  PLAYING: 'PLAYING',
  PAUSED: 'PAUSED',
  BOSS_INTRO: 'BOSS_INTRO',
  GAME_OVER: 'GAME_OVER',
  VICTORY: 'VICTORY'
};
