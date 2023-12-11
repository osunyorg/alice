import UI from "js/game/UI";
import Thing from "./Thing";

export default class Coin extends Thing {
  constructor(data) {
    data.src = "/assets/images/jouer/bitcoin.png";
    data.srcWidth = 80;
    data.srcHeight = 48;
    data.width = 40;
    data.height = 24;

    super(data);

    this.type = "coin";
    this.data = data;
    this.active = true; 
    this.popin = UI.getPopin(this.data.id);
    this.popin.element.querySelector('.pick').addEventListener('click', this.pick.bind(this));
  }

  startCollide() {
    UI.openPopin(this.data.id);
  }

  pick() {
    if (this.active) {
        this.active = false;
        UI.collectCoin(this.data.id);
    }
  }

  stopCollide() {
    this.popin.close();
  }

  update() {
    if (!this.active) return;
    super.update()
  }
}