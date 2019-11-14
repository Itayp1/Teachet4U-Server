/* eslint-disable no-undef */
const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  BASE_API: process.env.BASE_API,
  PORT: process.env.PORT,
  MONGO_CONNECTION_STRING: process.env.MONGO_CONNECTION_STRING
};
