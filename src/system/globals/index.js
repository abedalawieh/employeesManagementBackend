import Responses from "../../utils/responses/index.js";
import dotenv from "dotenv";

dotenv.config();

import logger from "../../config/logger/logger.config.js";
import { emailValidator } from "../../validations/INDEX.JS";
import {
  sanitizeString,
  sanitizeArray,
  sanitizeObject,
} from "../../sanitizers/index.js";
const response = new Responses();

global._sys = {
  utils: {
    response: response,
  },
  validate: {
    email: emailValidator,
  },
  sanitize: {
    string: sanitizeString,
    array: sanitizeArray,
    object: sanitizeObject,
  },

  logger: logger,
};
export default _sys;
