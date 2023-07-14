import { WORLD } from "js/data/world";
import Sprite from "./Sprite";

export default class Character extends Sprite {
  constructor(parameters) {
    super(parameters)
    this.speed = 10;
    this.type = "character";
    this.canCollide = true;
    this.collideTimeoutDuration = 5000;
    this.depthOffset = -10;
  }
  move(x, y) {
    const { area } = WORLD
    x = this.x + x * this.speed;
    y = this.y + y * this.speed;

    const { matrice, size } = WORLD.collisions

    // if (this.type !== "hero") return;

    const mapx = Math.round((x + this.width/2) / size)
    const mapy = Math.round((y + this.height/2) / size)
    if (typeof matrice[mapy] == 'undefined') {
      return;
    } else if (matrice[mapy].length < mapx) {
      return;
    }

    if (matrice[mapy][mapx] == 1) {
      this.x = x;
      this.y = y;
    }

    // this.x = Math.max(area.left, Math.min(this.x, area.right));
    // this.y = Math.max(area.top, Math.min(this.y, area.bottom));
  }
  onCollide() {
    this.canCollide = false;
    setTimeout(() => {
      this.canCollide = true;
    }, this.collideTimeoutDuration);
  }
}

