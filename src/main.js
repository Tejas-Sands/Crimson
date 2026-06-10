import { Game } from './core/Game.js';
import { GAME_STATES } from './data/constants.js';

console.log("Crimson Awakening Prototype Started");

const canvas = document.getElementById('gameCanvas');
const game = new Game(canvas);
window.game = game;

const quirkyTips = [
  "Reticulating bat splines...",
  "Polishing the fangs...",
  "Reminding the guards to patrol predictably...",
  "Applying SPF 5000 sunscreen...",
  "Hiding the garlic...",
  "Tuning the church bells...",
  "Ironing the crimson cape...",
  "Practicing menacing glares in the mirror...",
  "Convincing Brother Aldric he's just a prototype boss...",
  "Ordering O-Negative from the local blood bank...",
  "Ensuring the darkness is sufficiently edgy..."
];

const tipEl = document.getElementById('loading-tip');
if (tipEl) {
  tipEl.innerText = quirkyTips[Math.floor(Math.random() * quirkyTips.length)];
}

// Start game loop (renders scene in background of Menu)
game.start();

// Fill progress bar
const progressFill = document.getElementById('progress-fill');
if (progressFill) {
  setTimeout(() => { progressFill.style.width = '40%'; }, 50);
  setTimeout(() => { progressFill.style.width = '80%'; }, 200);
  setTimeout(() => { progressFill.style.width = '100%'; }, 450);
}

// Fade out loader smoothly
const loader = document.getElementById('loader');
if (loader) {
  setTimeout(() => {
    loader.style.opacity = '0';
    setTimeout(() => loader.remove(), 800);
  }, 750);
}

// --- Menu UI Event Bindings ---

const landingPage = document.getElementById('landing-page');
const howToPlayModal = document.getElementById('how-to-play-modal');
const levelIntroCard = document.getElementById('level-intro-card');
const gameOverScreen = document.getElementById('game-over-screen');
const victoryScreen = document.getElementById('victory-screen');
const hudLayer = document.getElementById('hud-layer');

let introTimerId = null;

// Start game function
function triggerStartSequence() {
  // Hide landing page
  landingPage.classList.remove('visible');
  
  // Show intro card
  levelIntroCard.classList.add('visible');
  
  // Auto-start game after 4.5 seconds
  introTimerId = setTimeout(() => {
    startTheHunt();
  }, 4500);
}

function startTheHunt() {
  if (introTimerId) {
    clearTimeout(introTimerId);
    introTimerId = null;
  }
  levelIntroCard.classList.remove('visible');
  game.startPlaying();
}

// Start button
document.getElementById('start-game-btn').addEventListener('click', () => {
  triggerStartSequence();
});

// Skip/Click intro card
document.getElementById('level-intro-card').addEventListener('click', () => {
  startTheHunt();
});

// How to Play modal open/close
document.getElementById('how-to-play-btn').addEventListener('click', () => {
  howToPlayModal.classList.add('visible');
});

document.getElementById('close-modal-btn').addEventListener('click', () => {
  howToPlayModal.classList.remove('visible');
});

// Game Over: Try Again
document.getElementById('retry-game-btn').addEventListener('click', () => {
  gameOverScreen.classList.remove('visible');
  game.startPlaying();
});

// Game Over: Return to Menu
document.getElementById('menu-game-btn').addEventListener('click', () => {
  gameOverScreen.classList.remove('visible');
  landingPage.classList.add('visible');
  hudLayer.style.display = 'none';
  game.state = GAME_STATES.MENU;
});

// Victory: Start Anew
document.getElementById('victory-retry-btn').addEventListener('click', () => {
  victoryScreen.classList.remove('visible');
  game.startPlaying();
});

// Victory: Return to Menu
document.getElementById('victory-menu-btn').addEventListener('click', () => {
  victoryScreen.classList.remove('visible');
  landingPage.classList.add('visible');
  hudLayer.style.display = 'none';
  game.state = GAME_STATES.MENU;
});
