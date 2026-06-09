export class Input {
  constructor() {
    this.keys = new Set();
    this.previousKeys = new Set();
    this.mouse = { x: 0, y: 0, clicked: false, rightClicked: false };

    window.addEventListener('keydown', (e) => {
      this.keys.add(e.code);
    });

    window.addEventListener('keyup', (e) => {
      this.keys.delete(e.code);
    });

    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    });

    window.addEventListener('mousedown', (e) => {
      if (e.button === 0) this.mouse.clicked = true;
      if (e.button === 2) this.mouse.rightClicked = true;
    });

    window.addEventListener('mouseup', (e) => {
      if (e.button === 0) this.mouse.clicked = false;
      if (e.button === 2) this.mouse.rightClicked = false;
    });
    
    // Prevent context menu on right click
    window.addEventListener('contextmenu', e => e.preventDefault());
  }

  update() {
    this.previousKeys = new Set(this.keys);
  }

  isDown(code) {
    return this.keys.has(code);
  }

  isJustPressed(code) {
    return this.keys.has(code) && !this.previousKeys.has(code);
  }
}
