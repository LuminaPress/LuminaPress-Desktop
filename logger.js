const log = require("electron-log");

function setupLogger() {
  log.info("App Started");

  process.on("uncaughtException", (err) => {
    log.error("Uncaught exception:", err);
  });
}

module.exports = { setupLogger };
