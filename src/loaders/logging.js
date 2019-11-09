const Logger = require("./looger");
module.exports = () => {
  process
    .on("unhandledRejection", (reason, p) => {
      Logger.error(`message:${reason.message} stack:${reason.stack}`);
    })
    .on("uncaughtException", err => {
      Logger.error(`message:${err.message} stack:${err.stack}`);
      //  / process.exit(1);
    });
  process.on("SIGINT", () => {
    process.exit();
  });
};
