const VerifyToken = require("../services/Login"),
  redis = require("redis"),
  bluebird = require("bluebird"),
  Student = require("../services/Student"),
  Teacher = require("../services/Teacher"),
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
  const existCache = await client.getAsync(JSON.stringify(access_token));
  if (existCache) {
    res.locals.jwt = JSON.parse(existCache);
    return next();
  }
  console.log(existCache);

  const verifyToken = new VerifyToken(platform, token, access_token);
  //verify the token
  const result = await verifyToken.verify();
  //decode the token and get the decoded payload
  const encodedjwt = await verifyToken.decode();
  //console.log(encodedjwt.email);
  const teacher = new Teacher(encodedjwt.email, null, null);
  const teacherExist = await teacher.isExist();
  //console.log(teacherExist);
  const student = new Student(encodedjwt.email, null, null);

  const studentExist = await student.isExist();
  //console.log(studentExist);

  if (teacherExist) {
    encodedjwt.profile = "teacher";
  } else if (studentExist) {
    encodedjwt.profile = "teachstudenter";
  } else {
    next(new Error("user not exist"));
  }
  //console.log(result);
  client.set(
    JSON.stringify(access_token),
    JSON.stringify(encodedjwt),
    "EX",
    result.expires_in
  );

  //set the payload in the res varibale
  res.locals.jwt = encodedjwt;
  //console.log(verifyToken);

  next();
};
