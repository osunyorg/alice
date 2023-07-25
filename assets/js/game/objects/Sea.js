import Thing from "./Thing";
import { WORLD } from "../data/world";
import { game } from "js/game/MainGame";

export default class Sea {
  constructor() {
    this.texture = new Image();
    this.pattern = null;
    this.offset = {
      x: 0,
      y: 0
    }

    this.texture.addEventListener('load', () => {
      this.pattern = game.ctx.createPattern(this.texture , 'repeat');
      console.log(this.texture.width, this.texture.height);
    });

    this.texture.src = '/assets/images/sea.gif';
  }
  draw() {
    // game.ctx.fillStyle = this.pattern;
    // game.ctx.translate(this.offset.x, this.offset.y);
    // game.ctx.fillRect(0, 0, game.width - this.offset.x, game.height - this.offset.y);
    // game.ctx.translate(-this.offset.x, -this.offset.y);
    // const columns = Math.ceil(WORLD.width*3 / this.texture.width),
    //   rows = Math.ceil(WORLD.height*3 / this.texture.height);
    // let x = 0,
    //   y = 0;

    // for(y = -0; y < rows; y += 1) {
    //   for(x = -0; x < columns; x += 1) {
    //     this.drawCell(x, y);
    //   }
    // }
  }
  drawCell (x, y) {
    x *= this.texture.width;
    y *= this.texture.height;
    game.drawImage(this.texture, 0, 0, this.texture.width, this.texture.height, x, y, this.texture.width, this.texture.height);
  }
  update () {
    if (!this.pattern) return;

    // this.offset.x -= 0.1;
    this.draw();
  }
}