import Responses from "../../utils/responses/index.js";
import dotenv from "dotenv";
import express from "express";
dotenv.config();

import logger from "../../config/logger/logger.config.js";
import { emailValidator } from "../../validations/index.js";

import {
  sanitizeString,
  sanitizeArray,
  sanitizeObject,
} from "../../sanitizers/index.js";

const response = new Responses();

global._sys = {
  utils: {
    response1: response,
  },
  validate: {
    email: emailValidator,
  },
  sanitize: {
    string: sanitizeString,
    array: sanitizeArray,
    object: sanitizeObject,
  },
  express: express,
  logger: logger,
};
export default _sys;
