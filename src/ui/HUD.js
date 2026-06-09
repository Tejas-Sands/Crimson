import { PLAYER, COMBAT } from '../data/constants.js';

export class HUD {
  constructor() {
    this.healthValue = document.getElementById('health-value');
    this.bloodFill = document.getElementById('blood-fill');
    this.timeValue = document.getElementById('time-value');
    this.abilitiesContainer = document.getElementById('abilities-container');
    
    // Create ability DOM elements once
    this.slots = [];
    const keys = ['J', 'F', 'G', 'K'];
    const names = ['Slash', 'Bat', 'Mist', 'Roll'];
    
    for (let i = 0; i < 4; i++) {
      const slot = document.createElement('div');
      slot.className = 'ability-slot';
      
      const keyEl = document.createElement('div');
      keyEl.className = 'ability-key';
      keyEl.innerText = keys[i];
      
      const nameEl = document.createElement('div');
      nameEl.className = 'ability-name';
      nameEl.innerText = names[i];
      
      const cdEl = document.createElement('div');
      cdEl.className = 'cooldown-overlay';
      
      slot.appendChild(keyEl);
      slot.appendChild(nameEl);
      slot.appendChild(cdEl);
      
      this.abilitiesContainer.appendChild(slot);
      
      this.slots.push({
        root: slot,
        cdOverlay: cdEl
      });
    }
    
    // Set icons (converting canvas to data URL for CSS background)
    // We will do this via a method once assets are generated
  }

  setIcons(assetGen) {
    if (assetGen.ui.heart) {
      document.getElementById('heart-icon').style.backgroundImage = `url(${assetGen.ui.heart.toDataURL()})`;
    }
    if (assetGen.ui.blood) {
      document.getElementById('blood-icon').style.backgroundImage = `url(${assetGen.ui.blood.toDataURL()})`;
    }
  }

  update(game) {
    const player = game.player;
    const bloodMeter = game.bloodMeter;

    // Health
    this.healthValue.innerText = `${Math.floor(player.hp)} / ${PLAYER.START_HP}`;

    // Blood
    const bloodRatio = player.blood / PLAYER.MAX_BLOOD;
    this.bloodFill.style.width = `${bloodRatio * 100}%`;
    this.bloodFill.style.backgroundColor = player.isStarving ? '#400' : '#b00';

    // Day / Night
    const isDay = game.dayNight.isDaytime();
    this.timeValue.innerText = isDay ? 'DAYTIME' : 'NIGHT';
    this.timeValue.style.color = isDay ? '#f39c12' : '#8e44ad';

    // Abilities
    const abilitiesState = [
      { cd: player.attackCooldown, maxCd: COMBAT.SLASH_CD_MS, active: true },
      { cd: bloodMeter.batCooldown, maxCd: 15, active: player.blood >= 25 },
      { cd: bloodMeter.mistCooldown, maxCd: 8, active: player.blood >= 75 },
      { cd: player.dodgeCooldown, maxCd: PLAYER.DODGE_COOLDOWN_MS, active: true }
    ];

    for (let i = 0; i < 4; i++) {
      const state = abilitiesState[i];
      const slot = this.slots[i];
      
      if (state.active) {
        slot.root.classList.add('active');
      } else {
        slot.root.classList.remove('active');
      }

      if (state.cd > 0) {
        const cdRatio = state.cd / state.maxCd;
        slot.cdOverlay.style.height = `${cdRatio * 100}%`;
      } else {
        slot.cdOverlay.style.height = '0%';
      }
    }
  }
}
