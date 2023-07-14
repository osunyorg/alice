import Thing from "./Thing";
import { WORLD } from "../data/world";
import { game } from "js/Game";

export default class Map extends Thing {
  constructor() {
    super({
      width: WORLD.width,
      height: WORLD.height,
      srcWidth: WORLD.width * 2,
      srcHeight: WORLD.height * 2,
      src: '/assets/images/map/map.png'
    })
    this.setCollision();
    this.drawCollisionMap();
    super.update();
  }
  setCollision() {
    this.collisionMap = [];
    WORLD.collisions.matrice.forEach((line) => {
      line.split('').forEach((cell, x) => {
        this.collisionMap.push(cell)
      })
    });
  }
  drawCollisionMap(){
    const size = WORLD.collisions.size;
    WORLD.collisions.matrice.forEach((line, y) => {
      line.split('').forEach((cell, x) => {
        this.drawSquare(x, y, size, cell)
      })
    });
  }
  drawSquare(x, y, size, active) {
    game.ctx.beginPath(); // RESET path here
    game.ctx.globalAlpha = 0.6;
    game.ctx.fillStyle = active == 1 ? "transparent" : "red";
    game.ctx.fillRect(x * size + game.camera.x, y * size + game.camera.y, size, size)
    game.ctx.globalAlpha = 1.0;

    if (active !== 1) {
      const coinImage = new Image();
      coinImage.src = "/assets/images/coin/coin.png"; 
      
      game.ctx.drawImage(coinImage, x * size + game.camera.x, y * size + game.camera.y, size, size);
    }
 
  }
  update() {
    // return;
    super.update();
    if (WORLD.collisions.visible)
      this.drawCollisionMap();
  }

}