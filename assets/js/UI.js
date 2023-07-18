import { Popin } from "./ui/Popin";

class UI {
  constructor() {
    this.popins = [];
  }
  setup() {
    document.querySelectorAll('.popin').forEach(element => {
      this.popins[element.id] = new Popin(element);
    });
    this.coinsContainer = document.querySelector('.coins');
  }
  closeAll() {
    for (let key in this.popins) {
      this.popins[key].close();
    }
  }
  open(id) {
    this.closeAll();
    this.popins[id].open();
  }
  visitCity(id) {
    this.open(id); 
    document.getElementById('sound-city').play();
  }
  collectCoin(id) {
    const coin = document.createElement('div'),
      title = this.popins[id].element.querySelector('h2').innerText;
    coin.classList.add('coin')
    coin.innerHTML = `<p>${title}</p>`;
    this.coinsContainer.appendChild(coin);
    coin.addEventListener('click', this.open.bind(this, id));
    document.getElementById('sound-coin').play();
  }
}

export default new UI();