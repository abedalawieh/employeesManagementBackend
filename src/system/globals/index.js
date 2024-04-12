import Responses from "../../utils/responses/index.js";
import dotenv from "dotenv";

dotenv.config();

import logger from "../../config/logger/logger.config.js";

const response = new Responses();

global._sys = {
  utils: {
    response: response,
  },

  logger: logger,
};
export default _sys;
