import App from "./app/app";
import Logger from "./app/config/logger";
const PORT = process.env.LISTEN_PORT || 3000;

const app = new App().app;
const server = app.listen(PORT, () => {
  Logger.log("info", "Connected to " + PORT);
});

export default server;
