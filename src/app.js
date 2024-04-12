import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import helmet from "helmet";
import compression from "compression";
import cors from "cors";
import fileUpload from "express-fileupload";
import createHttpError from "http-errors";

//Create Express App

const app = express();
//morgan
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}
//helmet
app.use(helmet());
//parse json body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//gzip compression
app.use(compression());
//file upload
app.use(fileUpload({ useTempFiles: true }));
//cors
app.use(cors({ origin: _sys.services.frontend.url }));
//error handling
app.use(async (req, res, next) => {
  next(createHttpError.NotFound("This route does not exist"));
});
app.use(async (err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});
console.log(_sys.services.frontend.url);
export default app;
