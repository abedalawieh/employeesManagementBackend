import Responses from "../../utils/responses/index.js";
import axios from "axios";
import logger from "../../config/logger/logger.config.js";
import dotenv from "dotenv";
dotenv.config();
const response = new Responses();

global._sys = {
  services: {
    frontend: {
      url: process.env.FRONTEND_URL,
    },

    utils: {
      response: response,
      axios: axios,
    },
  },
  logger: logger,
};
export default _sys;
