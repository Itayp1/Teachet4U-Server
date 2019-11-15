/* eslint-disable no-unused-vars */
const Student = require("../services/Student"),
  Teacher = require("../services/Teacher");

module.exports = async (req, res, next) => {
  const { email } = req.body;
  let isExist = null;
  const teacher = new Teacher(email, null, null);
  isExist = await teacher.isExist();
  const student = new Student(email, null, null);
  isExist = await student.isExist();
  next();
};
