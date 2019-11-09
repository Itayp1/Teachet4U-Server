const bodyParser = require("body-parser"),
  cors = require("cors"),
  config = require("../../server.config"),
  routes = require("../api/index"),
  morgan = require("morgan"),
  helmet = require("helmet"),
  compression = require("compression"),
  isProduction = process.env.env === "production";
const Logger = require("./looger");

module.exports = app => {
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
  app.use(cors());
  // Middleware that transforms the raw string of req.body into json
  app.use(bodyParser.json());
  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }));
  //register other security protections
  app.use(helmet());
  //register gzip compression
  app.use(compression());
  // Load API routes
  app.use(config.BASE_API, routes);

  /// catch 404 and forward to error handler
  app.use((req, res, next) => {
    const err = new Error("Not Found");
    err["status"] = 404;
    next(err);
  });
  // catch exeptions from the express handler
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
      errors: {
        message: err.message
      }
    });
  });
};
