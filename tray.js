const { Tray, Menu, nativeImage } = require("electron");
const path = require("path");

let tray = null;

function setupTray(mainWindow) {
  const icon = nativeImage.createFromPath(
    path.join(__dirname, "./assets/logo.png")
  );
  tray = new Tray(icon);

  const contextMenu = Menu.buildFromTemplate([
    { label: "Open", click: () => mainWindow.show() },
    { label: "Quit", click: () => app.quit() },
  ]);

  tray.setToolTip("LuminaPress");
  tray.setContextMenu(contextMenu);
}

module.exports = { setupTray };
