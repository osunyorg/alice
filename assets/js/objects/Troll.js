import { TROLLS } from "js/data/trolls";
import Character from "./Character";
import { game } from "js/Game";

const ACTIONS = ["idle", "idle", "idle", "left", "right", "up", "down"];
export default class Troll extends Character {
  constructor({x = 0, y = 0, src = null}) {
    super({
      x: x,
      y: y,
      width: 128,
      height: 150,
      srcWidth: 256,
      srcHeight: 300,
      src: src,
      animations: {
        idle: {
          steps: 8,
          y: 0
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
    this.type = "troll";
    this.changeActionChance = 0.05;
    this.speed = 2;
    this.action = "idle";

    this.isSpeaking = false;
    this.slang = "";
    this.slangMilliseconds = 5000;

    this.setAnimation("idle");
  }
  updateMovment() {
    let x = 0, y = 0;
    if (Math.random() < this.changeActionChance) {
      this.action = ACTIONS[Math.round(Math.random() * (ACTIONS.length-1))]
    }

    switch(this.action) {
      case "up":
        y = -1;
        break;
      case "right":
        x = 1;
        break;
      case "down":
        y = 1;
        break;
      case "left":
        x = -1;
        break;
    }

    if (x || y) {
      this.move(x, y);
      this.setAnimation(x > 0 ? "walk" : "reversedWalk");
    } else {
      this.setAnimation("idle");
    }
  }
  onCollide() {
    super.onCollide();
    const slang = TROLLS.slangs[Math.round(Math.random() * (TROLLS.slangs.length-1))],
      author = TROLLS.authors[Math.round(Math.random() * (TROLLS.authors.length-1))];

    // this.speak(`
    //   <p>“${slang}”</p>
    //   <small>by @${author}</small>
    // `);

    this.speak(`
      <p>${slang}</p>
    `);

    setTimeout(() => this.stopSpeaking(), this.slangMilliseconds);
  }
  update() {
    if (this.isSpeaking) {
      this.updateDialog();
      this.action = "idle";
    } else {
      this.updateMovment();
    }

    super.update();
  }
}