import App from "./app/app";
import Logger from "./app/config/logger";
const PORT = process.env.LISTEN_PORT || 3000;

const app = new App().app;
const server = app.listen(PORT, () => {
  Logger.log("info", "Connected to " + PORT);
  Logger.error("0 *** error");
  Logger.warn("1 *** warning");
  Logger.info("2 *** informational");
  Logger.log({ private: true, level: "error", message: "This log is private" });
});

export default server;
