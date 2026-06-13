/**
 * StoryPrologue — 5-slide cinematic origin story.
 * Tells the tale of Lord Vaelis Draven's betrayal and vampiric awakening.
 */
export class StoryPrologue {
  constructor() {
    this.slides = [
      {
        title: 'The Nobleman',
        text: 'Lord Vaelis Draven was once a nobleman of the Silver Court — respected, feared, and fiercely loyal to Dusk Hollow. His family had protected these lands for seven generations.',
        colors: { bg1: '#1a1408', bg2: '#0a0a06', accent: '#d4af37', mood: 'warm' },
      },
      {
        title: 'The Betrayal',
        text: 'But the Cathedral of the Sacred Dawn saw heresy in his bloodline. Brother Aldric led the inquisition. They came at dawn — with fire, silver chains, and righteous fury.',
        colors: { bg1: '#1a0808', bg2: '#080404', accent: '#ff4422', mood: 'fire' },
      },
      {
        title: 'The Curse',
        text: 'In the dungeons beneath the cathedral, an ancient prisoner whispered from the dark: "Drink, and you shall never die." Lord Draven drank. The curse was sealed in blood.',
        colors: { bg1: '#0a0004', bg2: '#040008', accent: '#cc0000', mood: 'blood' },
      },
      {
        title: 'The Awakening',
        text: 'Three centuries passed in dreamless slumber. The cathedral still stands. Brother Aldric\'s holy order still hunts the creatures of the night. But tonight, the oldest vampire in Dusk Hollow opens his eyes.',
        colors: { bg1: '#080810', bg2: '#04040a', accent: '#e74c3c', mood: 'dark' },
      },
      {
        title: 'Vengeance',
        text: 'The hunt begins. The blood debt must be paid.',
        colors: { bg1: '#0a0a0a', bg2: '#060608', accent: '#ff1122', mood: 'crimson' },
      },
    ];

    this.currentSlide = 0;
    this.isActive = false;
    this.onComplete = null;

    // Typewriter state
    this.typewriterIndex = 0;
    this.typewriterTimer = 0;
    this.typewriterSpeed = 35; // ms per character
    this.textComplete = false;

    // Animation timers
    this.slideAlpha = 0;
    this.fadeState = 'in'; // 'in', 'hold', 'out'

    this._buildDOM();
  }

  _buildDOM() {
    this.container = document.getElementById('story-prologue');
    this.canvas = document.getElementById('story-canvas');
    this.ctx = this.canvas.getContext('2d');
    this.titleEl = document.getElementById('story-title');
    this.textEl = document.getElementById('story-text');
    this.skipBtn = document.getElementById('story-skip-btn');
    this.advancePrompt = document.getElementById('story-advance');

    // Resize canvas
    this._resizeCanvas();
    window.addEventListener('resize', () => this._resizeCanvas());

    // Advance on click
    this.container.addEventListener('click', (e) => {
      if (e.target === this.skipBtn) return;
      this._advance();
    });

    // Skip button
    this.skipBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this._complete();
    });

    // Keyboard advance
    this._keyHandler = (e) => {
      if (!this.isActive) return;
      if (e.code === 'Space' || e.code === 'Enter') {
        this._advance();
      } else if (e.code === 'Escape') {
        this._complete();
      }
    };
    window.addEventListener('keydown', this._keyHandler);
  }

  _resizeCanvas() {
    if (!this.canvas) return;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  start(onComplete) {
    this.onComplete = onComplete;
    this.isActive = true;
    this.currentSlide = 0;
    this.container.classList.add('visible');
    this._showSlide(0);
    this._startAnimation();
  }

  _advance() {
    if (!this.isActive) return;
    if (!this.textComplete) {
      // Show full text instantly
      const slide = this.slides[this.currentSlide];
      this.textEl.textContent = slide.text;
      this.typewriterIndex = slide.text.length;
      this.textComplete = true;
      this.advancePrompt.style.opacity = '1';
      return;
    }
    // Next slide
    if (this.currentSlide < this.slides.length - 1) {
      this.fadeState = 'out';
    } else {
      this._complete();
    }
  }

  _showSlide(index) {
    const slide = this.slides[index];
    this.titleEl.textContent = slide.title;
    this.titleEl.style.color = slide.colors.accent;
    this.textEl.textContent = '';
    this.typewriterIndex = 0;
    this.typewriterTimer = 0;
    this.textComplete = false;
    this.slideAlpha = 0;
    this.fadeState = 'in';
    this.advancePrompt.style.opacity = '0';
  }

  _complete() {
    this.isActive = false;
    this.container.classList.remove('visible');
    if (this.onComplete) this.onComplete();
  }

  _startAnimation() {
    const animate = () => {
      if (!this.isActive) return;
      this._updateFrame();
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }

  _updateFrame() {
    const slide = this.slides[this.currentSlide];
    const now = Date.now();

    // Fade transitions
    if (this.fadeState === 'in') {
      this.slideAlpha = Math.min(1, this.slideAlpha + 0.02);
      if (this.slideAlpha >= 1) this.fadeState = 'hold';
    } else if (this.fadeState === 'out') {
      this.slideAlpha = Math.max(0, this.slideAlpha - 0.03);
      if (this.slideAlpha <= 0) {
        this.currentSlide++;
        this._showSlide(this.currentSlide);
      }
    }

    // Typewriter
    if (!this.textComplete && this.fadeState === 'hold') {
      this.typewriterTimer += 16; // ~60fps
      while (this.typewriterTimer >= this.typewriterSpeed && this.typewriterIndex < slide.text.length) {
        this.typewriterIndex++;
        this.typewriterTimer -= this.typewriterSpeed;
      }
      this.textEl.textContent = slide.text.substring(0, this.typewriterIndex);
      if (this.typewriterIndex >= slide.text.length) {
        this.textComplete = true;
        this.advancePrompt.style.opacity = '1';
      }
    }

    // Render background art
    this._renderBackground(slide);

    // Apply global opacity
    this.container.style.opacity = this.slideAlpha;
  }

  _renderBackground(slide) {
    const w = this.canvas.width;
    const h = this.canvas.height;
    const ctx = this.ctx;

    ctx.clearRect(0, 0, w, h);

    // Background gradient
    const grad = ctx.createLinearGradient(0, 0, 0, h);
    grad.addColorStop(0, slide.colors.bg1);
    grad.addColorStop(1, slide.colors.bg2);
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    const time = Date.now() / 1000;

    // Scene-specific procedural art
    switch (slide.colors.mood) {
      case 'warm':
        this._drawNobleScene(ctx, w, h, time, slide.colors.accent);
        break;
      case 'fire':
        this._drawBetrayalScene(ctx, w, h, time, slide.colors.accent);
        break;
      case 'blood':
        this._drawCurseScene(ctx, w, h, time, slide.colors.accent);
        break;
      case 'dark':
        this._drawAwakeningScene(ctx, w, h, time, slide.colors.accent);
        break;
      case 'crimson':
        this._drawVengeanceScene(ctx, w, h, time, slide.colors.accent);
        break;
    }

    // Vignette overlay
    const vignette = ctx.createRadialGradient(w/2, h/2, h*0.3, w/2, h/2, h*0.9);
    vignette.addColorStop(0, 'transparent');
    vignette.addColorStop(1, 'rgba(0,0,0,0.8)');
    ctx.fillStyle = vignette;
    ctx.fillRect(0, 0, w, h);
  }

  _drawNobleScene(ctx, w, h, t, accent) {
    // Estate silhouette with warm glow
    ctx.fillStyle = '#0c0a06';
    // Ground
    ctx.fillRect(0, h * 0.72, w, h * 0.28);
    // Building
    const bx = w * 0.3, by = h * 0.35, bw = w * 0.4, bh = h * 0.37;
    ctx.fillRect(bx, by, bw, bh);
    // Towers
    ctx.fillRect(bx - 30, by + 40, 40, bh - 40);
    ctx.fillRect(bx + bw - 10, by + 40, 40, bh - 40);
    // Windows with warm glow
    ctx.fillStyle = accent;
    ctx.globalAlpha = 0.4 + Math.sin(t * 2) * 0.1;
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 2; j++) {
        ctx.fillRect(bx + 40 + i * (bw - 80) / 3, by + 50 + j * 80, 20, 30);
      }
    }
    ctx.globalAlpha = 1;
    // Nobleman silhouette
    this._drawFigure(ctx, w * 0.5, h * 0.68, 1.0, '#080604');
    // Stars
    this._drawStars(ctx, w, h, t, 'rgba(212, 175, 55, 0.3)');
  }

  _drawBetrayalScene(ctx, w, h, t, accent) {
    // Fire glow
    const fireGrad = ctx.createRadialGradient(w * 0.5, h * 0.6, 0, w * 0.5, h * 0.6, h * 0.5);
    fireGrad.addColorStop(0, 'rgba(255, 68, 34, 0.15)');
    fireGrad.addColorStop(1, 'transparent');
    ctx.fillStyle = fireGrad;
    ctx.fillRect(0, 0, w, h);
    // Cathedral silhouette
    ctx.fillStyle = '#0a0404';
    ctx.fillRect(0, h * 0.72, w, h * 0.28);
    const cx = w * 0.5, cw = w * 0.3;
    ctx.fillRect(cx - cw/2, h * 0.3, cw, h * 0.42);
    // Steeple
    ctx.beginPath();
    ctx.moveTo(cx - cw/2, h * 0.3);
    ctx.lineTo(cx, h * 0.1);
    ctx.lineTo(cx + cw/2, h * 0.3);
    ctx.fill();
    // Cross
    ctx.fillStyle = accent;
    ctx.globalAlpha = 0.6 + Math.sin(t * 3) * 0.2;
    ctx.fillRect(cx - 3, h * 0.12, 6, 25);
    ctx.fillRect(cx - 10, h * 0.16, 20, 5);
    ctx.globalAlpha = 1;
    // Approaching figures
    for (let i = 0; i < 5; i++) {
      this._drawFigure(ctx, w * 0.2 + i * 30, h * 0.7 - i * 3, 0.7, '#0c0606');
    }
    // Fire particles
    for (let i = 0; i < 8; i++) {
      const px = w * 0.3 + Math.sin(t * 2 + i) * w * 0.2;
      const py = h * 0.6 + Math.cos(t * 3 + i * 0.5) * 20;
      ctx.fillStyle = accent;
      ctx.globalAlpha = 0.3 + Math.sin(t * 4 + i) * 0.2;
      ctx.fillRect(px, py, 3, 3);
    }
    ctx.globalAlpha = 1;
  }

  _drawCurseScene(ctx, w, h, t, accent) {
    // Dungeon darkness
    ctx.fillStyle = '#020004';
    ctx.fillRect(0, 0, w, h);
    // Dim red glow from eyes
    const eyeGlow = ctx.createRadialGradient(w * 0.6, h * 0.4, 0, w * 0.6, h * 0.4, h * 0.3);
    eyeGlow.addColorStop(0, 'rgba(204, 0, 0, 0.08)');
    eyeGlow.addColorStop(1, 'transparent');
    ctx.fillStyle = eyeGlow;
    ctx.fillRect(0, 0, w, h);
    // Eyes in the dark
    ctx.fillStyle = accent;
    ctx.globalAlpha = 0.5 + Math.sin(t * 1.5) * 0.3;
    ctx.fillRect(w * 0.58, h * 0.38, 6, 3);
    ctx.fillRect(w * 0.64, h * 0.38, 6, 3);
    ctx.globalAlpha = 1;
    // Chalice
    ctx.fillStyle = '#1a0000';
    ctx.fillRect(w * 0.47, h * 0.55, 24, 20);
    ctx.fillRect(w * 0.45, h * 0.53, 28, 6);
    ctx.fillRect(w * 0.49, h * 0.72, 20, 4);
    // Blood in chalice
    ctx.fillStyle = accent;
    ctx.globalAlpha = 0.6 + Math.sin(t * 2) * 0.2;
    ctx.fillRect(w * 0.48, h * 0.56, 22, 8);
    ctx.globalAlpha = 1;
    // Chains
    ctx.strokeStyle = '#222';
    ctx.lineWidth = 2;
    for (let i = 0; i < 3; i++) {
      ctx.beginPath();
      ctx.moveTo(w * 0.3 + i * 60, 0);
      ctx.lineTo(w * 0.3 + i * 60 + Math.sin(t + i) * 5, h * 0.3);
      ctx.stroke();
    }
  }

  _drawAwakeningScene(ctx, w, h, t, accent) {
    // Coffin
    ctx.fillStyle = '#0c0c12';
    ctx.fillRect(0, h * 0.72, w, h * 0.28);
    const coffinX = w * 0.35, coffinW = w * 0.3;
    ctx.fillStyle = '#12101a';
    ctx.fillRect(coffinX, h * 0.5, coffinW, h * 0.22);
    // Coffin lid cracking open
    ctx.save();
    ctx.translate(coffinX, h * 0.5);
    ctx.rotate(-0.15 - Math.sin(t * 0.5) * 0.05);
    ctx.fillStyle = '#18161e';
    ctx.fillRect(0, -5, coffinW, 8);
    ctx.restore();
    // Red mist pouring out
    for (let i = 0; i < 12; i++) {
      const mx = coffinX + Math.random() * coffinW;
      const my = h * 0.48 + Math.sin(t * 2 + i) * 10;
      ctx.fillStyle = accent;
      ctx.globalAlpha = 0.05 + Math.sin(t + i * 0.5) * 0.03;
      ctx.fillRect(mx, my, 8 + Math.random() * 8, 4);
    }
    ctx.globalAlpha = 1;
    // Glowing eyes from coffin
    ctx.fillStyle = accent;
    ctx.globalAlpha = 0.6 + Math.sin(t * 2) * 0.3;
    ctx.fillRect(w * 0.47, h * 0.56, 5, 3);
    ctx.fillRect(w * 0.52, h * 0.56, 5, 3);
    ctx.globalAlpha = 1;
  }

  _drawVengeanceScene(ctx, w, h, t, accent) {
    // Rain
    ctx.strokeStyle = 'rgba(150, 170, 200, 0.15)';
    ctx.lineWidth = 1;
    for (let i = 0; i < 50; i++) {
      const rx = (i * 37 + t * 80) % w;
      const ry = (i * 53 + t * 120) % h;
      ctx.beginPath();
      ctx.moveTo(rx, ry);
      ctx.lineTo(rx + 1, ry + 15);
      ctx.stroke();
    }
    // City rooftop silhouette
    ctx.fillStyle = '#0a0a0c';
    ctx.fillRect(0, h * 0.72, w, h * 0.28);
    for (let i = 0; i < 8; i++) {
      const bh = 40 + Math.random() * 80;
      ctx.fillRect(i * (w / 8), h * 0.72 - bh, w / 8 - 5, bh);
    }
    // Hero standing on rooftop
    this._drawVampireSilhouette(ctx, w * 0.5, h * 0.42, accent, t);
    // Moon
    ctx.fillStyle = 'rgba(200, 180, 160, 0.1)';
    ctx.beginPath();
    ctx.arc(w * 0.75, h * 0.2, 40, 0, Math.PI * 2);
    ctx.fill();
  }

  _drawFigure(ctx, x, y, scale, color) {
    ctx.fillStyle = color;
    const s = scale * 0.8;
    ctx.fillRect(x - 6 * s, y - 35 * s, 12 * s, 25 * s); // body
    ctx.beginPath();
    ctx.arc(x, y - 38 * s, 6 * s, 0, Math.PI * 2);
    ctx.fill(); // head
  }

  _drawVampireSilhouette(ctx, x, y, accent, t) {
    ctx.fillStyle = '#050508';
    // Body
    ctx.fillRect(x - 8, y, 16, 40);
    // Head
    ctx.beginPath();
    ctx.arc(x, y - 5, 8, 0, Math.PI * 2);
    ctx.fill();
    // Cape billowing
    ctx.beginPath();
    ctx.moveTo(x - 8, y + 5);
    ctx.quadraticCurveTo(x - 35 + Math.sin(t * 2) * 8, y + 30, x - 25 + Math.sin(t * 1.5) * 5, y + 45);
    ctx.lineTo(x + 8, y + 5);
    ctx.fill();
    // Glowing eyes
    ctx.fillStyle = accent;
    ctx.globalAlpha = 0.7 + Math.sin(t * 3) * 0.3;
    ctx.fillRect(x - 4, y - 6, 3, 2);
    ctx.fillRect(x + 1, y - 6, 3, 2);
    ctx.globalAlpha = 1;
    // Weapon glow
    ctx.fillStyle = accent;
    ctx.globalAlpha = 0.4 + Math.sin(t * 2) * 0.2;
    ctx.fillRect(x + 10, y + 5, 2, 30);
    ctx.globalAlpha = 1;
  }

  _drawStars(ctx, w, h, t, color) {
    ctx.fillStyle = color;
    for (let i = 0; i < 15; i++) {
      const sx = (i * 97) % w;
      const sy = (i * 47) % (h * 0.4);
      ctx.globalAlpha = 0.2 + Math.sin(t * 2 + i) * 0.15;
      ctx.fillRect(sx, sy, 2, 2);
    }
    ctx.globalAlpha = 1;
  }
}
