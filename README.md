# dazn-player-hotkeys

Contains Javascript that can be injected to DAZN to receive some rudimentary keyboard hotkeys / shortcuts for the video player. Also adds the ability to fast-forward / rewind 10 seconds instead, which was standard in the old NFL Gamepass App.

## Installation

If using Google Chrome, injection can be done with the extension [Custom JavaScript for Websites 2](https://chrome.google.com/webstore/detail/custom-javascript-for-web/ddbjnfjiigjmcpcpkmhogomapikjbjdk).

This is a one-time setup. When all these steps are completed, you shouldn't have to do anything again unless you uninstall the extension.

1. Install the chrome extension
2. Go to [DAZN Website](https://dazn.com)
3. Open the extension while on DAZN's website.
4. Toggle `"Enable cjs for this host"` in the top right corner
5. Paste the contents of `index.js` to the editor in the extension.
6. Press Save
7. Enjoy dazn with hotkeys!

## Hotkeys / Shortcuts

| Key           | Action                  |
| ------------- | ----------------------- |
| `m`           | Mute                    |
| `f`           | Enter Fullscreen        |
| `esc`         | Exit Fullscreen         |
| `Left Arrow`  | Rewind 10 seconds       |
| `Right Arrow` | Fast-forward 10 seconds |
| `Up Arrow`    | Fast-forward 30 seconds |
| `Down Arrow`  | Rewind 30 seconds       |
