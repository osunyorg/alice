import Thing from "./Thing";

export default class Sign extends Thing {
  constructor(data) {
    super(data);

    this.type = "sign";
    this.data = data;
    this.html = data.html;
    this.canCollide = false;
  }
}