import { createLogger, transports, format } from "winston";

const Logger = createLogger({
  level: "info",
  format: format.json(),
  transports: [
    new transports.File({ filename: "combined.log" }),
    new transports.Console(),
  ],
});

export default Logger;
