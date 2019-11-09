const express = require("express"),
  app = express(),
  loaders = require("./loaders"),
  conf = require("../server.config");

const startServer = async () => {
  await loaders(app);
  app.listen(3000, err => {
    if (err) {
      console.log(err);
      process.exit(1);
      return;
    }
    console.log(`
        ################################################
             Server listening on port: ${conf.PORT} 
        ################################################
      `);
  });
};

startServer();

// src
// │   app.js          # App entry point
// └───api             # Express route controllers for all the endpoints of the app
// └───config          # Environment variables and configuration related stuff
// └───jobs            # Jobs definitions for agenda.js
// └───loaders         # Split the startup process into modules
// └───models          # Database models
// └───services        # All the business logic is here
// └───subscribers     # Event handlers for async task
