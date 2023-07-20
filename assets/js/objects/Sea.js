import Thing from "./Thing";
import { WORLD } from "../data/world";
import { game } from "js/Game";

export default class Sea {
  constructor() {
    this.texture = new Image();
    this.pattern = null;

    this.texture.addEventListener('load', () => {
      this.pattern = game.ctx.createPattern(this.texture , 'repeat')
    });

    this.texture.src = '/assets/images/alice.png';
  }
  draw() {
    game.ctx.fillStyle = this.pattern;
    game.ctx.fillRect(0, 0, game.width, game.height); 
  }
  update () {
    if (this.pattern) return;
    this.draw();
  }
}