const { autoUpdater } = require("electron-updater");

function setupAutoUpdater() {
  autoUpdater.checkForUpdatesAndNotify();

  autoUpdater.on("update-available", () => {
    console.log("Update available.");
  });

  autoUpdater.on("update-downloaded", () => {
    console.log("Update downloaded.");
    autoUpdater.quitAndInstall();
  });

  autoUpdater.on("error", (err) => {
    console.error("Error during auto update:", err);
  });
}

module.exports = { setupAutoUpdater };
