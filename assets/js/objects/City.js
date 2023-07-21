import { WORLD } from "js/data/world";
import SpeakingThing from "./SpeakingThing";
import UI from "js/UI";
import { game } from "js/Game";

export default class City extends SpeakingThing {
  constructor(data) {
    data.hitbox = {
      width: 70,
      height: 70,
      x: 50,
      y: 25
    }

    data.width = data.srcWidth * WORLD.cities.scale;
    data.height = data.srcHeight * WORLD.cities.scale;

    super(data);

    this.type = "city";
    this.data = data;
    this.html = data.html;
    this.canCollide = true;
    this.isCollided = false;
    this.wasCollided = false;

    this.dialog.classList.add('game-dialog--action');
    this.dialog.addEventListener('click', () => this.openPopin());
  }

  onCollide() {
    if (!this.wasCollided)
      game.scene.hero.isWalkingToTarget = false;

    this.isCollided = true;
  }

  startCollide() {
    UI.visitCity(this.data.id);
  }

  stopCollide() {
    UI.closeAll();
  }

  update() {
    super.update();

    if (this.isCollided && !this.wasCollided) {
      this.wasCollided = true;
      this.startCollide();
    } else if (!this.isCollided && this.wasCollided) {
      this.wasCollided = false;
      this.stopCollide();
    }
    this.isCollided = false;
  }
}