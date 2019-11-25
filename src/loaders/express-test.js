/* eslint-disable no-undef */
const express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  cors = require("cors"),
  config = require("../../server.config"),
  routes = require("../api"),
  morgan = require("morgan"),
  helmet = require("helmet"),
  compression = require("compression"),
  Logger = require("./looger"),
  loaders = require("../loaders"),
  isProduction = process.env.ENV === "production";
loaders(app);
app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
require("express-async-errors");

if (!isProduction) {
  app.use(morgan("tiny"));
}

// Health Check endpoints
app.get("/health", (req, res) => {
  res
    .status(200)
    .send("UP")
    .end();
});

// Enable Cross Origin Resource Sharing to all origins by default
//app.use(cors());
// Middleware that transforms the raw string of req.body into json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
//register other security protections
app.use(helmet());
//register gzip compression
app.use(compression());
// Load API ye32
app.use(config.BASE_API, routes);

/// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  console.log("callerr");
  next(err);
});
// catch exeptions from the express handler

app.use((err, req, res, next) => {
  Logger.error(`message:${err.message || err} stack:${err.stack || null}`);
  // Any request to this server will get here, and will send an HTTP
  const status = err.status || 500;

  res.status(status).json({ status: err.message });
});
