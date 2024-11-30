const { ipcMain } = require("electron");

function setupIPC(mainWindow) {
  ipcMain.on("request-data", (event, arg) => {
    console.log("Data requested:", arg);
    event.reply("response-data", { data: "Hello from Main Process!" });
  });
}

module.exports = { setupIPC };
