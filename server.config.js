/* eslint-disable no-undef */
if (process.env.env == "dev") {
  const dotenv = require("dotenv");
  dotenv.config();
}

module.exports = {
  BASE_API: process.env.BASE_API,
  PORT: process.env.PORT,
  MONGO_CONNECTION_STRING: process.env.MONGO_CONNECTION_STRING,
  SMTP_USER: process.env.SMTP_USER,
  SMTP_PASS: process.SMTP_PASS,
  SMTP_HOST: process.env.SMTP_HOST,
  SMTP_PORT: process.env.SMTP_PORT
};
