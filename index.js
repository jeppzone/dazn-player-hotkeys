const VOLUME_SELECTOR = 'button[class^="volumeControl___volume-mute-unmute___"]';

const M_KEY = 77;
const F_KEY = 70;
const ESC_KEY = 27;
const ARROW_LEFT_KEY = 37;
const ARROW_UP_KEY = 38;
const ARROW_RIGHT_KEY = 39;
const ARROW_DOWN_KEY = 40;

window.onkeyup = function (e) {
  const key = e.which || e.keyCode;

  switch (key) {
    case M_KEY:
      const elem = document.querySelector(selector);
      if (elem) {
        elem.click();
      }
      break;

    case F_KEY:
      window.player.enterFullscreen();
      break;

    case ESC_KEY:
      window.player.exitFullscreen();
      break;

    case ARROW_LEFT_KEY:
      window.player.seek(window.player.videoElement.currentTime - 10);
      break;

    case ARROW_UP_KEY:
      window.player.seek(window.player.videoElement.currentTime + 30);
      break;

    case ARROW_RIGHT_KEY:
      window.player.seek(window.player.videoElement.currentTime + 10);
      break;

    case ARROW_DOWN_KEY:
      window.player.seek(window.player.videoElement.currentTime - 30);
      break;
  }
};
