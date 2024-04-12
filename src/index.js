import _sys from "./system/globals/index.js";

import app from "./app.js";

//env variables
const PORT = process.env.PORT;
let server = app.listen(PORT, () => {
  _sys.logger.info(`Server Listening on port ${PORT}`);
});

//handle server error
const exitHandler = () => {
  if (server) {
    _sys.logger.info("server closed.");
    process.exit(1);
  } else {
    process.exit(1);
  }
};
const unexpectedErrorHnadler = (error) => {
  _sys.logger.error(error);
  exitHandler();
};
process.on("uncaughtException", unexpectedErrorHnadler);
process.on("unhandledRejection", unexpectedErrorHnadler);

//SIGTERM
process.on("SIGTERM", () => {
  if (server) {
    _sys.logger.info("server closed.");
    process.exit(1);
  }
});
