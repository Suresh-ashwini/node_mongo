import { createLogger, transports, format } from "winston";

const ignorePrivate = format((info, opts) => {
  if (info.private) {
    return false;
  }
  return info;
});

const Logger = createLogger({
  level: "silly",
  format: format.combine(
    ignorePrivate(),
    format.simple()
  ),
  transports: [
    new transports.File({ filename: "combined.log" }),
    new transports.Console(),
  ],
  silent: false,
});

export default Logger;
