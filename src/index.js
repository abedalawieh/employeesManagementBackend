import app from "./app.js";

//env variables
const PORT = process.env.PORT;

let server = app.listen(PORT, () => {
  console.log(`Server Listening on port ${PORT}`);
});

//handle server error
const exitHandler = () => {
  if (server) {
    console.log("server closed.");
    process.exit(1);
  } else {
    process.exit(1);
  }
};
const unexpectedErrorHnadler = (error) => {
  console.log(error);
  exitHandler();
};
process.on("uncaughtException", unexpectedErrorHnadler);
process.on("unhandledRejection", unexpectedErrorHnadler);

//SIGTERM
process.on("SIGTERM", () => {
  if (server) {
    console.log("Server closed.");
    process.exit(1);
  }
});
