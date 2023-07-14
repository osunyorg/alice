import { game } from './Game';
import ui from './UI';

game.setup();
ui.setup();

if (window.location.hash === '') {
  window.location.hash = '#home'
}