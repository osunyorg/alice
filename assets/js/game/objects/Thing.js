import { WORLD } from "../data/world";
import { game } from "js/game/MainGame";

export default class Thing {

  get projectedPosition () {
    return {
      x : this.x + game.camera.x,
      y : this.y + game.camera.y
    }
  }

  set src (source) {
    this.image = new Image();
    this.image.addEventListener('load', () => {
      if (!this.srcWidth || !this.srcHeight) {
        this.srcWidth = this.image.width;
        this.srcHeight = this.image.height;
      }

      if (!this.width && !this.height && this.scale) {
        this.width = this.srcWidth * this.scale;
        this.height = this.srcHeight * this.scale;
      }
    });
    this.image.src = source;
    this.ready = true
  }
  constructor({x, y, width, height, srcWidth, srcHeight, hitbox = null, src = null, scale = null}) {
    this.x = x || 0;
    this.y = y || 0;
    this.width = width;
    this.height = height;
    this.srcWidth = srcWidth;
    this.srcHeight = srcHeight;
    this.hitbox = hitbox || { width, height, x: 0, y: 0 };
    this.ready = this.src ? true : false;
    this.depthOffset = 0;
    this.scale = scale;

    // Collisions
    this.canCollide = true;
    this.isCollided = false;
    this.wasCollided = false;

    this.center = {
      x: this.x - this.width / 2,
      y: this.y - this.height / 2
    }

    if (src) {
      this.src = src;
    }
  }

  collides(thing) {
    if (!this.canCollide || !thing.canCollide) return;
    return (this.x + this.hitbox.x + this.hitbox.width > thing.x + thing.hitbox.x && this.x + this.hitbox.x < thing.x + thing.hitbox.x + thing.hitbox.width && thing.y + thing.hitbox.x + thing.hitbox.height > this.y + this.hitbox.y && thing.y + thing.hitbox.y < this.y + this.hitbox.height + this.hitbox.y);
  }

  onCollide(object) {
    this.isCollided = true;
  }

  startCollide() {
  }

  stopCollide() {
  }

  update() {
    if (!this.ready) return;
    game.drawImage(this.image, 0, 0, this.srcWidth, this.srcHeight, this.x, this.y, this.width, this.height);

    if (this.isCollided && !this.wasCollided) {
      this.wasCollided = true;
      this.startCollide();
    } else if (!this.isCollided && this.wasCollided) {
      this.wasCollided = false;
      this.stopCollide();
    }
    this.isCollided = false;

    if (WORLD.collisions.visible) {
      this.drawHitbox();
    }
  }
  drawHitbox() {
    game.ctx.beginPath();
    game.ctx.globalAlpha = 0.3;
    game.ctx.fillStyle = "blue";
    game.ctx.fillRect(this.x + this.hitbox.x + game.camera.x, this.y + this.hitbox.y + game.camera.y, this.hitbox.width, this.hitbox.height)
    game.ctx.globalAlpha = 1.0;
  }
}