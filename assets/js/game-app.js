import { game } from './game/MainGame';
import ui from './game/UI';
import getImageExtension from './game/utils/detectImageSupport';
import settings from './game/data/settings';

( async () => {
    settings.extension = await getImageExtension();
    ui.setup();
    game.setup();
})();