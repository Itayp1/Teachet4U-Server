/* eslint-disable no-undef */
if (process.env.ENV == "development") {
  require("dotenv").config();
}

module.exports = {
  BASE_API: process.env.BASE_API,
  PORT: process.env.PORT || 3000,
  MONGO_CONNECTION_STRING: process.env.MONGO_CONNECTION_STRING,
  SMTP_USER: process.env.SMTP_USER,
  SMTP_PASS: process.SMTP_PASS,
  SMTP_HOST: process.env.SMTP_HOST,
  SMTP_PORT: process.env.SMTP_PORT,
  REDIS_CONNECTION_STRING: process.env.REDIS_CONNECTION_STRING,
  REDIS_PORT: process.env.REDIS_PORT,
  REDIS_PASSWORD: process.env.REDIS_PASSWORD,
  OAUTH_FACEBOOK: process.env.OAUTH_FACEBOOK,
  OAUTH_GOOGLE: process.env.OAUTH_GOOGLE
};
