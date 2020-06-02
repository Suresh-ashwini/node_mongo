import App from "./app/app";
import Logger from "./app/config/logger";
const PORT = process.env.LISTEN_PORT || 3000;

const app = new App().app;
const server = app.listen(PORT, () => {
  Logger.log("info", "Connected to " + PORT);
  Logger.log("info", "1--informational");
  Logger.log("warn", "2--- warning");
  Logger.log("error", "3---error");
  Logger.info("4 *** informational");
  Logger.warn("5 *** warning");
  Logger.error("6 *** error");
});

export default server;
