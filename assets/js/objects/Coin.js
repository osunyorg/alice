import UI from "js/UI";
import Thing from "./Thing";
// import { popinCoin } from "./Popin";
import { game } from "js/Game";

export default class Coin extends Thing {
  constructor(data) {
    data.src = "/assets/images/coin/coin.png";
    data.srcHeight = data.srcWidth = 160;
    data.width = 40;
    data.height = 40;

    super(data);

    this.type = "coin";
    this.data = data;
    this.canCollide = true;
    this.active = true; 
  }

  onCollide() {
    this.active = false;
    UI.open(this.data.id);
    UI.collectCoin(this.data.id);
  }

  update() {
    if (!this.active) return;
    super.update()
  }
}