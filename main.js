const { app, BrowserWindow } = require("electron");
const path = require("path");
const { setupTray } = require("./tray");
const { setupAutoUpdater } = require("./autoUpdater");
const { setupIPC } = require("./ipc");
const { setupLogger } = require("./logger");
const Sentry = require("@sentry/electron/main"); // Correct import for main process

let mainWindow;

Sentry.init({
  dsn: "https://136aea6f31b69465e656cc308aa26bb7@o1232927.ingest.us.sentry.io/4508349131849728",
});

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // Load React app or local HTML
  mainWindow.loadURL("http://localhost:5173");

  // Open DevTools in development mode
  if (process.env.NODE_ENV === "development") {
    mainWindow.webContents.openDevTools();
  }

  // Setup tray icon
  setupTray(mainWindow);

  // Setup auto updater
  setupAutoUpdater();

  // Setup IPC for communication between renderer and main process
  setupIPC(mainWindow);

  // Setup logging
  setupLogger();

  // Log any uncaught exceptions to Sentry
  process.on("uncaughtException", (err) => {
    Sentry.captureException(err);
  });
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
