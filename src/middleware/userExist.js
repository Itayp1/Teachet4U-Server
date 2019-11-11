const Student = require("../services/Student"),
  Teacher = require("../services/Teacher");

module.exports = async (req, res, next) => {
  const { email } = req.body;
  let isExist;
  teacher = new Teacher(null, null, email);
  isExist = await teacher.isExist();
  student = new Student(null, null, email);
  isExist = await student.isExist();
  next();
};
