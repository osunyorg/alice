import Thing from "./Thing";
import { WORLD } from "../data/world";
import { game } from "js/Game";

export default class Sea {
  constructor() {
    const img = new Image()
    img.src = '/assets/images/sea.gif'
    game.ctx.createPattern(img.src , 'repeat')
    game.ctx.fillStyle = ptrn;
    game.ctx.fillRect(0, 0, canvas.width, canvas.height); 
  }
}