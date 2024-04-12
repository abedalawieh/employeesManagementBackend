import app from "./app.js";
import logger from "./config/logger/logger.config.js";
//env variables
const PORT = process.env.PORT;

let server = app.listen(PORT, () => {
  logger.info(`Server Listening on port ${PORT}`);
});

//handle server error
const exitHandler = () => {
  if (server) {
    logger.info("server closed.");
    process.exit(1);
  } else {
    process.exit(1);
  }
};
const unexpectedErrorHnadler = (error) => {
  logger.error(error);
  exitHandler();
};
process.on("uncaughtException", unexpectedErrorHnadler);
process.on("unhandledRejection", unexpectedErrorHnadler);

//SIGTERM
process.on("SIGTERM", () => {
  if (server) {
    logger.info("server closed.");
    process.exit(1);
  }
});
