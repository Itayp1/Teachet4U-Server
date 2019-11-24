const VerifyToken = require("../services/Login"),
  Student = require("../services/Student"),
  Teacher = require("../services/Teacher"),
  config = require("../../server.config");

require("express-async-errors");
module.exports = async (req, res, next) => {
  const { platform, token, access_token } = req.headers;
  if (!platform || !token) throw new Error("missing token");

  //if (!access_token) throw new Error("missing acess token");

  const verifyToken = new VerifyToken(platform, token, access_token);
  //verify the token
  //const result = await verifyToken.verify();
  //decode the token and get the decoded payload

  const encodedjwt = await verifyToken.decode();
  await verifyToken.verifygoogle();

  const teacher = new Teacher(encodedjwt.email, null, null);
  const teacherExist = await teacher.isExist();
  const student = new Student(encodedjwt.email, null, null);

  const studentExist = await student.isExist();

  if (teacherExist || studentExist) {
    next(new Error("user  exist"));
  }

  //set the payload in the res varibale
  req.body.email = encodedjwt.email;

  next();
};
