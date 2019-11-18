/* eslint-disable no-unused-vars */
const Student = require("../services/Student"),
  Teacher = require("../services/Teacher");

module.exports = async (req, res, next) => {
  const { email } = req.body;
  const teacher = new Teacher(email, null, null);
  const teacherExist = await teacher.isExist();
  const student = new Student(email, null, null);
  const studentExist = await student.isExist();
  if (teacherExist) {
    res.locals.profile = "teacher";
  } else if (studentExist) {
    res.locals.profile = "teachstudenter";
  } else {
    throw new Error("user not exist");
  }

  next();
};
