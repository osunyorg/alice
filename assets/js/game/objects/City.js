import { WORLD } from "js/game/data/world";
import SpeakingThing from "./SpeakingThing";
import UI from "js/game/UI";
import { game } from "js/game/MainGame";

export default class City extends SpeakingThing {
  constructor(data) {
    data.hitbox = {
      width: 100,
      height: 100,
      x: 0,
      y: 0
    }

    data.scale = WORLD.cities.scale * (1 / window.devicePixelRatio);

    super(data);

    this.type = "city";
    this.data = data;
    this.html = data.html;
    this.canCollide = true;
    this.isCollided = false;
    this.wasCollided = false;
    
    this.dialog.classList.add('game-dialog--action');
    this.dialog.addEventListener('click', () => this.openPopin());

    this.setImageFromDom();

    this.popin = UI.getPopin(this.data.id);

  }

  setImageFromDom() {
    const image = document.querySelector(`#${this.data.id} img`);
    if (!image) {
      return;
    }
    if (image.complete) {
      this.setImage(image);
    } else {
      image.addEventListener('load', () => {
        this.setImage(image);
      })
    }
  }

  setImage(image) {
    this.src = image.currentSrc;
    this.hitbox.width = image.width * WORLD.cities.scale * 0.8;
    this.hitbox.height = image.height * WORLD.cities.scale * 0.8;
    this.depthOffset = (image.height * WORLD.cities.scale) * 0.15;
    this.hitbox.x = image.width * WORLD.cities.scale * 0.1;
    this.hitbox.y = image.height * WORLD.cities.scale * 0.2;
  }

  onCollide() {
    super.onCollide();
    if (!this.wasCollided) {
        game.scene.hero.isWalkingToTarget = false;
    }
  }

  startCollide() {
    UI.openPopin(this.data.id);
    document.getElementById('sound-city').play();
  }

  stopCollide() {
    this.popin.close();
  }
}