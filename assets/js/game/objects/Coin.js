import UI from "js/game/UI";
import Thing from "./Thing";

export default class Coin extends Thing {
  constructor(data) {
    data.src = "/assets/images/jouer/bitcoin.png";
    data.srcWidth = 80;
    data.srcHeight = 48;
    data.width = 40;
    data.height = 24;

    super(data);

    this.type = "coin";
    this.data = data;
    this.active = true; 
    this.popin = UI.getPopin(this.data.id);
    this.popin.element.querySelector('.pick').addEventListener('click', this.pick.bind(this));

    this.up = {
      playing: false,
      offset: -13,
      y: 0,
      speed: 0.1,
      direction: 1
    };

    this.setupAnimation();
  }

  startCollide() {
    UI.openPopin(this.data.id);
    this.onHover();
  }

  pick() {
    if (!this.active) return;
    this.active = false;
    UI.collectCoin(this.data.id);
  }

  stopCollide() {
    this.popin.close();
  }

  update() {
    if (!this.active) return;
    super.update();

    if (this.up.playing) {
      this.anime();
    }
  }

  onHover() {
    if (this.up.playing) return;
    this.up.tick = 0;
    this.up.playing = true;
    this.up.direction = -1;
    this.up.speed = 2;
    this.up.y = 0;
    document.getElementById('swoosh').play();
  }

  anime() {
    this.up.y += this.up.speed * this.up.direction;

    if (this.up.y < this.up.offset) {
      this.up.direction = 1;
      this.up.speed = 2.25;
    }

    if (this.up.direction === 1 && this.up.y > 0) {
      this.up.playing = false;
    }

    this.y = this.data.y + this.up.y;
  }
}