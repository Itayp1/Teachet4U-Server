//require("express-async-errors");

module.exports = function() {
  process
    .on("unhandledRejection", (reason, p) => {
      console.log(reason);
    })
    .on("uncaughtException", err => {
      console.log(err);
      //  / process.exit(1);
    });
  process.on("SIGINT", () => {
    process.exit();
  });
};
