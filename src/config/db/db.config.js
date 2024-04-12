import { Sequelize } from "sequelize";
const connection = new Sequelize(
  process.env.DB_DbName,
  process.env.DB_USER,
  process.env.DB_PASSWORD,

  {
    host: "localhost",
    dialect: "postgres",
  }
);
connection
  .sync()
  .then(() => {
    _sys.logger.info("Connection has been established successfully.");
  })
  .catch((e) => {
    _sys.logger.error("Error", e);
  });

export default connection;
