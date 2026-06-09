import { Game } from './core/Game.js';

console.log("Crimson Awakening Prototype Started");

const canvas = document.getElementById('gameCanvas');
const game = new Game(canvas);

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

// Start game immediately
game.start();

// Fade out loader smoothly
const loader = document.getElementById('loader');
if (loader) {
  // Give it just 100ms so the CSS fade transition has time to trigger
  setTimeout(() => {
    loader.style.opacity = '0';
    setTimeout(() => loader.remove(), 800);
  }, 100);
}
