import Controls from "js/Controls";
import Character from "./Character"
export default class Hero extends Character {
  constructor({x = 0, y = 0}) {
    super({
      x,
      y,
      width: 128,
      height: 150,
      srcWidth: 256,
      srcHeight: 300,
      src: '/assets/webp/characters/alice.webp',
      animations: {
        idle: {
          steps: 8,
          y: 0,
          framesPerTick: 18
        },
        walk: {
          steps: 8,
          y: 300
        },
        reversedWalk: {
          steps: 8,
          y: 600
        }
      }
    });
    this.type = "hero";
    this.speed = 6;
    this.controls = new Controls();
    this.direction = 1;
    this.collideTimeoutDuration = 1000;

    this.setAnimation("idle");
  }
  listenControls() {
    let x = 0, y = 0;
    if (this.controls.actions.left) {
      x = -1
      this.flipY = true;
    } else if (this.controls.actions.right) {
      x = 1
      this.flipY = false;
    }
    if (this.controls.actions.up) {
      y = -1
    } else if (this.controls.actions.down) {
      y = 1
    }
    if (x || y) {
      this.move(x, y);
      this.setAnimation(x > 0 ? "walk" : "reversedWalk");
    } else {
      this.setAnimation("idle");
    }
  }
  update() {
    this.listenControls();
    super.update();
  }
}