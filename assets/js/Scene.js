import {CITIES} from './data/cities';
import {TROLLS} from './data/trolls';
import {WORLD} from './data/world';
import {COINS} from './data/coins';
import Hero from './objects/Hero';
import City from './objects/City';
import Map from './objects/Map';
import Troll from './objects/Troll';
import Coin from './objects/Coin';

export default class Scene {
  constructor(game) {
    this.game = game;
    this.cities = [];
    this.trolls = [];
    this.elementsToUpdate = [];
    this.coins = [];
    this.setup();
  }
  setup() {
    this.map = new Map();
    this.addCoins();
    this.addAlice();
    this.addCities();
    this.addTrolls();
    this.elements = [
      ...this.cities, 
      ...this.trolls,
      ...this.coins, 
      this.hero
    ]
  }
  addCoins() {
    COINS.forEach((coin, index) => {
      this.coins.push(new Coin({...coin, index}));
    });
  }
  addAlice() {
    this.hero = new Hero({
      x: WORLD.width / 4, // Pas compris pour "/4"
      y: WORLD.height / 4
    });
  }
  addCities() {
    CITIES.forEach(city => {
      this.cities.push(new City(city));
    });
  }
  addTrolls() {
    let i = 0;
    TROLLS.images.forEach((src, i) => {
      this.trolls.push(new Troll({
        x: TROLLS.positions[i].x,
        y: TROLLS.positions[i].y,
        src: src
      }));
    })
  }
  checkCollision() {
    this.trolls.forEach(troll => {
      if (troll.collides(this.hero)) {
        troll.onCollide();
      }
    });
    this.cities.forEach(city => {
      if (city.collides(this.hero)) {
        city.onCollide();
      }
    });
    this.coins.forEach((coin) => {
      if (coin.collides(this.hero) && coin.active) {
        coin.onCollide();
      }
    });
  }
  update() {
    this.map.update();
    this.elements.sort((a, b) => (a.y + a.depthOffset) - (b.y + b.depthOffset))
    this.elements.forEach(element => element.update());
    this.checkCollision();
  }
}