const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // If you are developing with React, you can point to the dev server
  win.loadURL("http://localhost:5173");
  // Or load an HTML file if packaged
  // win.loadFile(path.join(__dirname, 'index.html'));
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
