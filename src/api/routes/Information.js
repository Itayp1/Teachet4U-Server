const router = require("express").Router(),
  ValidateJwt = require("../../middleware/ValidateJwt"),
  Teacher = require("../../services/Teacher"),
  Student = require("../../services/Student");

require("express-async-errors");

router.put("/update/teacher", async ({ body }, res) => {
  // prettier-ignore
  const {email} = body;
  const teacher = new Teacher(email);
  const result = await teacher.updateInfo(body);
  res.json(result);
});
router.put("/student", async ({ body }, res) => {
  const student = new Student(body);
  const result = await student.updateInfo();
  res.json(result);
});

router.get("/teacher", async ({ query }, res) => {
  // prettier-ignore
  const {email} = query;
  const teacher = new Teacher(email);
  const result = await teacher.getInfo();
  res.json(result);
});
router.get("/student", ValidateJwt, async ({ query }, res) => {
  const { email } = res.locals.jwt; // \\ query;
  const student = new Student(email);
  const result = await student.getInfo();
  res.json(result);
});
module.exports = router;
