const VerifyToken = require("../services/Login"),
  redis = require("redis"),
  bluebird = require("bluebird"),
  config = require("../../server.config");

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

const client = redis.createClient(
  config.REDIS_PORT,
  config.REDIS_CONNECTION_STRING,
  { password: "teacher4u" }
);
client.on("connect", function() {
  console.log("Redis client connected");
});
require("express-async-errors");
module.exports = async (req, res, next) => {
  const { platform, token, access_token } = req.headers;
  const verifyToken = new VerifyToken(platform, token, access_token);
  //verify the token
  await verifyToken.verify();
  //decode the token and get the decoded payload
  const encodedjwt = await verifyToken.decode();
  //set the payload in the res varibale
  res.locals.jwt = encodedjwt;
  //console.log(verifyToken);
  next();
};
