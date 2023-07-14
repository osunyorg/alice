export default class Controls {
  constructor() {

    this.actions = {
      up: false,
      right: false,
      down: false,
      left: false
    };

    this.bindKeyboard();
    this.bindButtons();
  }
  bindKeyboard() {
    window.addEventListener('keydown', e => {
      if (e.code === 'ArrowRight') {
        this.actions.right = true;
      }
      if (e.code === 'ArrowLeft') {
        this.actions.left = true;
      }
      if (e.code === 'ArrowDown') {
        this.actions.down = true;
      }
      if (e.code === 'ArrowUp') {
        this.actions.up = true;
      }
    });

    window.addEventListener('keyup', e => {
      if (e.code === 'ArrowRight') {
        this.actions.right = false;
      }
      if (e.code === 'ArrowLeft') {
        this.actions.left = false;
      }
      if (e.code === 'ArrowDown') {
        this.actions.down = false;
      }
      if (e.code === 'ArrowUp') {
        this.actions.up = false;
      }
    });

    window.addEventListener('blur', e => {
      this.actions.right = false;
      this.actions.left = false;
      this.actions.down = false;
      this.actions.up = false;
    });
  }
  bindButtons() {
    const buttons = document.querySelectorAll('.game-controls button');
    buttons.forEach(button => {
      button.addEventListener('pointerdown', (e) => {
        const action = button.getAttribute('data-action');
        this.actions[action] = true;
      })
      button.addEventListener('pointerup', (e) => {
        const action = button.getAttribute('data-action');
        this.actions[action] = false;
      })
    })
  }
}

