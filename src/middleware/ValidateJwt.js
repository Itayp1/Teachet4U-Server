/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const CERROR = require("../services/CustomError"),
  JsonWebToken = require("../services/JsonWebToken");

// require("express-async-errors");

module.exports = async (req, res, next) => {
  let { authorization } = req.headers;
  if (authorization && authorization.split(" ")[0] === "Bearer") {
    authorization = authorization.split(" ")[1];
  }

  const jwtVerifucation = new JsonWebToken(authorization);
  try {
    const isValid = jwtVerifucation.verifyJwt();
    next();
  } catch (error) {
    next(CERROR(error, 401));
  }
};
