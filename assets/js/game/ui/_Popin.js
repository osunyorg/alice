export class Popin {
  constructor(element) {
    this.element = element;
    this.isOffcanvas = this.element.classList.contains('popin--offcanvas');
    this.states = {
      opened: false,
      isClosing: false,
      isOpening: false,
      closingTimeout: null,
      openingTimeout: null
    };

    this.classes = {
      opened: "is-opened",
      bodyOpened: this.isOffcanvas ? "offcanvas-is-opened" : "popin-is-opened",
      bodyClosing: this.isOffcanvas ? "offcanvas-is-closing" : "popin-is-closing"
    }

    this.buttonClose = this.element.querySelector('.close'); 
    if(this.buttonClose) this.buttonClose.addEventListener('click', this.close.bind(this));
  }
  open() {
    if (this.states.isOpening || this.isOpened) return;
    clearTimeout(this.openingTimeout);

    this.states.isOpening = true;
    this.element.style.display = "flex";
    this.element.scrollTo(0, 0);

    // if (this.states.isClosing) clearTimeout(this.closingTimeout);

    this.openingTimeout = setTimeout(() => {
      this.element.classList.add(this.classes.opened);
      this.states.opened = true;
      this.states.isOpening = false;
    }, 10);

    document.body.classList.add(this.classes.bodyOpened);
  }
  close() {
    if (this.states.isClosing || !this.states.opened) return;
    clearTimeout(this.closingTimeout);

    if (this.states.isOpening) clearTimeout(this.openingTimeout);

    this.states.isClosing = true;
    this.states.opened = false;

    this.element.classList.remove(this.classes.opened);
    document.body.classList.remove(this.classes.bodyOpened);
    document.body.classList.add(this.classes.bodyClosing);
    this.closingTimeout = setTimeout(() => {
      this.element.style.display = "none";
      document.body.classList.remove(this.classes.bodyClosing);
      this.states.isClosing = false;
    }, 400);
  }
}
