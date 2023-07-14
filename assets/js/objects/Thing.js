import { game } from "js/Game";

export default class Thing {

  get projectedPosition () {
    return {
      x : this.x + game.camera.x,
      y : this.y + game.camera.y
    }
  }
  constructor({x, y, width, height, srcWidth, srcHeight, hitbox = null, src = null}) {
    this.x = x || 0;
    this.y = y || 0;
    this.width = width;
    this.height = height;
    this.srcWidth = srcWidth;
    this.srcHeight = srcHeight;
    this.hitbox = hitbox || { width, height, x: 0, y: 0 };
    this.src = src;
    this.ready = this.src ? true : false;
    this.depthOffset = 0;

    this.center = {
      x: this.x - this.width / 2,
      y: this.y - this.height / 2
    }

    if (this.src) {
      this.image = new Image();
      this.image.src = this.src;
      // this.image.addEventListener('load', () => {
      //   this.ready = true
      // });
      this.ready = true
    }
  }

  collides(thing) {
    if (!this.canCollide || !thing.canCollide) return;
    return (this.x + this.hitbox.x + this.hitbox.width > thing.x + thing.hitbox.x && this.x + this.hitbox.x < thing.x + thing.hitbox.x + thing.hitbox.width && thing.y + thing.hitbox.x + thing.hitbox.height > this.y + this.hitbox.y && thing.y + thing.hitbox.y < this.y + this.hitbox.height + this.hitbox.y);
  }

  update() {
    if (!this.ready) return;
    game.drawImage(this.image, 0, 0, this.srcWidth, this.srcHeight, this.x, this.y, this.width, this.height);
  }
  
}