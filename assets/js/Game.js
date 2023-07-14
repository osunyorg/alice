import Scene from './Scene';

export class Game {
  get width () {
    return this.canvas.width
  }
  get height () {
    return this.canvas.height
  }
  constructor() {
    this.container = document.querySelector('#game');

    if (!this.container) {
      return console.warning('no game container found');
    }

    this.camera = {
      x: 0,
      y: 0
    }
  }
  setup() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.container.appendChild(this.canvas);

    this.resize();
    this.listen();

    this.scene = new Scene(this);
    this.loop();
  }
  listen() {
    window.addEventListener('resize', this.resize.bind(this));
  }
  resize() {
    this.canvas.width = this.container.offsetWidth;
    this.canvas.height = this.container.offsetHeight;
  }
  loop () {
    this.ctx.clearRect(0, 0, this.width, this.height);
    requestAnimationFrame(this.loop.bind(this));
    this.scene.update();

    this.camera.x = -this.scene.hero.x - this.scene.hero.width / 2 + this.width / 2;
    this.camera.y = -this.scene.hero.y - this.scene.hero.height / 2 + this.height / 2;
  }
  drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh) {
    this.ctx.drawImage(image, sx, sy, sw, sh, dx + this.camera.x, dy + this.camera.y, dw, dh);
  }
  drawText(text, x, y) {
    this.ctx.font = '22px Calvino';
    this.ctx.textAlign = "center";
    this.ctx.fillText(text, x + this.camera.x, y + this.camera.y);
  }
  drawButton(text, x, y) {
    this.ctx.font = '22px Calvino';
    this.ctx.textAlign = "center";
    this.ctx.fillText(text, x + this.camera.x, y + this.camera.y);
  }
}

export const game = new Game();
