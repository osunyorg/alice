import Thing from "./Thing";
import { WORLD } from "../data/world";
import { game } from "js/Game";

export default class Sea {
  constructor() {
    // super({
    //   width: window.innerWidth,
    //   height: window.innerHeight,
    //   srcWidth: 83,
    //   srcHeight: 104,
    //   src: '/assets/images/sea/pattern-sea.png'
    // })
    const img = new Image()
    img.src = '/assets/images/sea/pattern-sea.png'
    game.ctx.createPattern(img.src , 'repeat')
    game.ctx.fillStyle = ptrn;
    game.ctx.fillRect(0, 0, canvas.width, canvas.height); 
  }
  update() {
    // return;
    // super.update();
    // if (WORLD.collisions.visible)
    //   this.drawCollisionMap();
  }

}