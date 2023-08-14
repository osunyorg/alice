import { WORLD } from "js/game/data/world";
import SpeakingThing from "./SpeakingThing";
import UI from "js/game/UI";
import { game } from "js/game/MainGame";

export default class City extends SpeakingThing {
  constructor(data) {
    data.hitbox = {
      width: 70,
      height: 70,
      x: 50,
      y: 0
    }

    data.scale = WORLD.cities.scale;

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
    this.hitbox.height = image.height / 8
    this.hitbox.y = image.height / 2
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
    UI.closeAllPopins();
  }
}