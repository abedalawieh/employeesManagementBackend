import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import compression from "compression";
import cors from "cors";
import connection from "./config/db/db.config.js";
import Employee from "./models/employee.model.js";
import Admin from "./models/admin.model.js";
import routes from "./routes/index.js";
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

//cors
app.use(cors({ origin: process.env.FRONTEND_URL }));
//routes api v1
app.use("/api/v1", routes);
//error handling
app.use(async (req, res, next) => {
  next(_sys.utils.response1.notFound(res, "This route does not exist"));
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
export default app;
