import { WORLD } from "js/game/data/world";
import Sprite from "./Sprite";

export default class Character extends Sprite {
  constructor(parameters) {
    super(parameters)
    this.speed = 10;
    this.type = "character";
    this.canCollide = true;
    this.collideTimeoutDuration = 5000;
    this.depthOffset = 0;
  }
  move(x, y) {
    const { matrice, size } = WORLD.collisions

    // if (this.type !== "hero") return;

    const mapx = Math.round((x + this.width/2) / size)
    const mapy = Math.round((y + this.height/2) / size)
    if (typeof matrice[mapy] == 'undefined') {
      return false;
    } else if (matrice[mapy].length < mapx) {
      return false;
    }

    if (matrice[mapy][mapx] == 1) {
      this.x = x;
      this.y = y;
    } else {
      return false;
    }

    return true;
  }
  onCollide() {
    this.canCollide = false;
    setTimeout(() => {
      this.canCollide = true;
    }, this.collideTimeoutDuration);
  }
}

