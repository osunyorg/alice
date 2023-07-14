export class UIPopin {
  constructor(element) {
    this.element = element;
    this.isOpened = false;
    this.isOffcanvas = this.element.classList.contains('popin--offcanvas')
    
    this.classes = {
      opened: "is-opened",
      bodyOpened: this.isOffcanvas ? "offcanvas-is-opened" : "popin-is-opened",
      bodyClosing: this.isOffcanvas ? "offcanvas-is-closing" : "popin-is-closing"
    }

    this.buttonClose = this.element.querySelector('.close'); 
    if(this.buttonClose) this.buttonClose.addEventListener('click', this.close.bind(this));
  }
  open() {
    this.element.classList.add(this.classes.opened);
    document.body.classList.add(this.classes.bodyOpened);
    this.element.scrollTo(0, 0);
    this.isOpened = true;
  }
  close() {
    if (!this.isOpened) return;

    this.isOpened = false;

    this.element.classList.remove(this.classes.opened);
    document.body.classList.remove(this.classes.bodyOpened);
    document.body.classList.add(this.classes.bodyClosing);
    setTimeout(() => {
        document.body.classList.remove(this.classes.bodyClosing);
    }, 400);
  }
}
