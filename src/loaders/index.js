const models = require("../models")();
const mongooseLoader = require("./mongoose");
const expressLoader = require("./express");
const Logger = require("./looger");
require("../subscribers/send_email_on_registration");
module.exports = async app => {
  await mongooseLoader();
  Logger.info("✌️ DB loaded and connected!");

  await models;
  Logger.info("✌️ DB models loaded!");

  await expressLoader(app);
  Logger.info("✌️ Express loaded!");

  // catch Uncaught error logging them
  require("./logging")();
};
