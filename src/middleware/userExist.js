/* eslint-disable no-unused-vars */
const Student = require("../services/Student"),
  Teacher = require("../services/Teacher");

module.exports = async (req, res, next) => {
  const { email } = req.body;
  let isExist = null;
  const teacher = new Teacher(null, null, email);
  isExist = await teacher.isExist();
  const student = new Student(null, null, email);
  isExist = await student.isExist();
  next();
};
