const router = require("express").Router(),
  userExist = require("../../middleware/verifyNewUserByToken"),
  Registration = require("../../services/Registration");

require("express-async-errors");

router.post("/teacher", userExist, async ({ body }, res) => {
  const registration = new Registration(body);
  const response = await registration.registerAsTeacher();
  res.send(response);
});

router.post("/student", userExist, async ({ body }, res) => {
  const registration = new Registration(body);
  const response = await registration.registerAsStudent();
  res.send(response);
});

module.exports = router;
