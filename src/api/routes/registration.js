const router = require("express").Router(),
  userExist = require("../../middleware/userExist"),
  Registration = require("../../services/Registration");

require("express-async-errors");

//router.use(userExist);

router.post("/teacher", async ({ body }, res) => {
  const registration = new Registration(body);
  const response = await registration.registerAsTeacher();
  res.send(response);
});

router.post("/student", async ({ body }, res) => {
  const registration = new Registration(body);
  const response = await registration.registerAsStudent();
  res.send(response);
});

module.exports = router;
