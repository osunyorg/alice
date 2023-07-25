import UI from "js/UI";
import Thing from "./Thing";

export default class Coin extends Thing {
  constructor(data) {
    data.src = "/assets/images/coin/coin.png";
    data.srcHeight = data.srcWidth = 160;
    data.width = 40;
    data.height = 40;

    super(data);

    this.type = "coin";
    this.data = data;
    this.active = true; 
    this.popin;
  }

  startCollide() {
    this.popin = UI.openPopin(this.data.id);
    this.popin.element.querySelector('.pick').addEventListener('click', this.pick.bind(this));
  }

  pick() {
    this.active = false;
    UI.collectCoin(this.data.id);
  }

  stopCollide() {
    this.popin.close();
  }

  update() {
    if (!this.active) return;
    super.update()
  }
}