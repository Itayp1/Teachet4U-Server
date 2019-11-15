const router = require("express").Router(),
  Teacher = require("../../services/Teacher"),
  Student = require("../../services/Student");

require("express-async-errors");

router.put("/teacher", async (req, res) => {
  const { body } = req;
  const teacher = new Teacher(body);
  const result = await teacher.updateInfo();
  res.json(result);
});
router.put("/student", async (req, res) => {
  const { body } = req;
  const student = new Student(body);
  const result = await student.updateInfo();
  res.json(result);
});

module.exports = router;
