const mongooseLoader = require("./mongoose");
const expressLoader = require("./express");
const Logger = require("./looger");

module.exports = async app => {
  await mongooseLoader();
  Logger.info("✌️ DB loaded and connected!");

  await expressLoader(app);
  Logger.info("✌️ Express loaded");

  /// catch Uncaught error logging them
  require("./logging")();
};
