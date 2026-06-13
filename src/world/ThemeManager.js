import * as THREE from 'three';

/**
 * ThemeManager — 5 themed level backgrounds for Crimson Awakening.
 * Access via ThemeManager.getTheme(1) through getTheme(5).
 * Each theme defines: colors, fog, lighting, tile palettes, env particles.
 */
export class ThemeManager {
  static getTheme(id) {
    const themes = {
      1: ThemeManager.duskHollow(),
      2: ThemeManager.crimsonCatacombs(),
      3: ThemeManager.frozenGraveyard(),
      4: ThemeManager.infernalSanctum(),
      5: ThemeManager.obsidianThrone(),
    };
    return themes[id] || themes[1];
  }

  /**
   * Theme 1 — Dusk Hollow
   * Gothic rain-soaked medieval town. Dark charcoal/noir palette.
   * Rain, warm amber player light, storm clouds with lightning flashes.
   */
  static duskHollow() {
    return {
      id: 1,
      name: 'Dusk Hollow',
      subtitle: 'The Rain-Soaked Parish',

      // Scene
      bgColor: 0x0a0a0a,
      fogColor: 0x0a0a0a,
      fogDensity: 0.002,

      // Lighting
      ambientColor: 0xffffff,
      ambientIntensity: 0.8,
      ambientNightColor: 0x1a253a,
      dirColor: 0xfffaea,
      dirIntensity: 1.0,
      dirNightColor: 0x3a4f6b,
      dirPosition: [100, 200, 50],
      playerLightColor: 0xffaa00,

      // Tile palette
      tiles: {
        grass:  { base: '#141416', highlight: '#1e1e22' },
        cobble: { base: '#222226', highlight: '#32323a' },
        wall:   { base: '#0a0a0d', highlight: '#18181f' },
        water:  { base: '#050508', highlight: '#1b1b22' },
        church: { base: '#141416', highlight: '#a0a0a8' },
        door:   { base: '#26262b', handle: '#000000' },
      },

      // Environmental particles
      envParticles: {
        type: 'rain',
        count: 110,
        color: 'rgba(180, 195, 220, 0.1)',
        speed: [18, 32],
        length: [12, 24],
      },

      // 3D environment additions
      skyGradient: ['#0a0a0f', '#0d0d14', '#0a0a0a'],
      hasLightningFlashes: true,
      groundFogEnabled: false,
    };
  }

  /**
   * Theme 2 — Crimson Catacombs
   * Underground bone crypts with flickering torchlight.
   * Warm amber haze, stone floor, skull-lined walls.
   */
  static crimsonCatacombs() {
    return {
      id: 2,
      name: 'Crimson Catacombs',
      subtitle: 'The Bone Crypts Below',

      bgColor: 0x0c0806,
      fogColor: 0x1a0f08,
      fogDensity: 0.004,

      ambientColor: 0xffcc88,
      ambientIntensity: 0.4,
      ambientNightColor: 0x3d2810,
      dirColor: 0xff9944,
      dirIntensity: 0.6,
      dirNightColor: 0x5a3010,
      dirPosition: [50, 80, 30],
      playerLightColor: 0xff7722,

      tiles: {
        grass:  { base: '#1a140e', highlight: '#241c14' },
        cobble: { base: '#2a1f16', highlight: '#3d2e22' },
        wall:   { base: '#12100c', highlight: '#2a2218' },
        water:  { base: '#0a0604', highlight: '#1a100a' },
        church: { base: '#1a140e', highlight: '#d4c4a8' },
        door:   { base: '#2a2016', handle: '#8a6a3a' },
      },

      envParticles: {
        type: 'dust',
        count: 40,
        color: 'rgba(255, 200, 120, 0.06)',
        speed: [2, 6],
        length: [1, 3],
      },

      skyGradient: ['#0c0806', '#0c0806', '#0c0806'],
      hasLightningFlashes: false,
      groundFogEnabled: true,
      groundFogColor: 'rgba(30, 18, 8, 0.3)',
    };
  }

  /**
   * Theme 3 — Frozen Graveyard
   * Moonlit snow cemetery. Ice blues and silver, ethereal pale mist.
   * Falling snow, visible moon, frost-edged tombstones.
   */
  static frozenGraveyard() {
    return {
      id: 3,
      name: 'Frozen Graveyard',
      subtitle: 'The Moonlit Cemetery',

      bgColor: 0x0a0e14,
      fogColor: 0x1a2a3f,
      fogDensity: 0.003,

      ambientColor: 0xb8ccee,
      ambientIntensity: 0.5,
      ambientNightColor: 0x2a3a55,
      dirColor: 0xddeeff,
      dirIntensity: 0.7,
      dirNightColor: 0x4a6088,
      dirPosition: [80, 180, -60],
      playerLightColor: 0x88bbff,

      tiles: {
        grass:  { base: '#1a1e24', highlight: '#2a3040' },
        cobble: { base: '#2a3040', highlight: '#3a4558' },
        wall:   { base: '#141820', highlight: '#222a38' },
        water:  { base: '#0a1018', highlight: '#182030' },
        church: { base: '#1a1e24', highlight: '#8899aa' },
        door:   { base: '#222a38', handle: '#667788' },
      },

      envParticles: {
        type: 'snow',
        count: 80,
        color: 'rgba(200, 220, 255, 0.15)',
        speed: [3, 8],
        length: [2, 4],
      },

      skyGradient: ['#0a0e14', '#1a2a44', '#0a0e14'],
      hasLightningFlashes: false,
      groundFogEnabled: true,
      groundFogColor: 'rgba(100, 140, 200, 0.08)',
    };
  }

  /**
   * Theme 4 — Infernal Sanctum
   * Volcanic cathedral. Deep reds, magma glow, obsidian floor.
   * Rising embers, heat shimmer, lava rivers.
   */
  static infernalSanctum() {
    return {
      id: 4,
      name: 'Infernal Sanctum',
      subtitle: 'The Volcanic Cathedral',

      bgColor: 0x0c0404,
      fogColor: 0x1a0808,
      fogDensity: 0.003,

      ambientColor: 0xff6633,
      ambientIntensity: 0.5,
      ambientNightColor: 0x3d1a0a,
      dirColor: 0xff4422,
      dirIntensity: 0.8,
      dirNightColor: 0x882211,
      dirPosition: [60, 120, 40],
      playerLightColor: 0xff4400,

      tiles: {
        grass:  { base: '#1a0a08', highlight: '#2a1410' },
        cobble: { base: '#2a1410', highlight: '#3d2018' },
        wall:   { base: '#140808', highlight: '#2a1010' },
        water:  { base: '#ff3300', highlight: '#ff6600' },  // Lava!
        church: { base: '#1a0a08', highlight: '#8a4422' },
        door:   { base: '#2a1410', handle: '#ff6600' },
      },

      envParticles: {
        type: 'embers',
        count: 60,
        color: 'rgba(255, 100, 20, 0.2)',
        speed: [5, 15],
        length: [2, 4],
      },

      skyGradient: ['#0c0404', '#2a0808', '#1a0404'],
      hasLightningFlashes: false,
      groundFogEnabled: true,
      groundFogColor: 'rgba(60, 15, 5, 0.2)',
    };
  }

  /**
   * Theme 5 — Obsidian Throne
   * Final boss cosmic castle. Deep purples, void black, ethereal glow.
   * Swirling dark violet, cosmic nebula, void fragments.
   */
  static obsidianThrone() {
    return {
      id: 5,
      name: 'Obsidian Throne',
      subtitle: 'The Void Beyond',

      bgColor: 0x060410,
      fogColor: 0x0a0818,
      fogDensity: 0.0025,

      ambientColor: 0x8844cc,
      ambientIntensity: 0.45,
      ambientNightColor: 0x2a1844,
      dirColor: 0xaa66ff,
      dirIntensity: 0.6,
      dirNightColor: 0x442266,
      dirPosition: [0, 200, 0],
      playerLightColor: 0xaa44ff,

      tiles: {
        grass:  { base: '#0c0818', highlight: '#181028' },
        cobble: { base: '#181028', highlight: '#281840' },
        wall:   { base: '#0a0610', highlight: '#180e28' },
        water:  { base: '#1a0830', highlight: '#2a1050' },
        church: { base: '#0c0818', highlight: '#6644aa' },
        door:   { base: '#181028', handle: '#aa66ff' },
      },

      envParticles: {
        type: 'void',
        count: 50,
        color: 'rgba(140, 80, 220, 0.12)',
        speed: [1, 4],
        length: [3, 8],
      },

      skyGradient: ['#060410', '#100820', '#060410'],
      hasLightningFlashes: false,
      groundFogEnabled: true,
      groundFogColor: 'rgba(60, 20, 100, 0.1)',
    };
  }
}
