const router = require("express").Router(),
  userExist = require("../../middleware/verifyNewUserByToken"),
  Registration = require("../../services/Registration"),
  JsonWebToken = require("./../../services/JsonWebToken"),
  verifyUserByToken = require("../../middleware/verifyUserByToken");

require("express-async-errors");

router.post("/teacher", userExist, async ({ body }, res) => {
  const registration = new Registration(body);
  const response = await registration.registerAsTeacher();
  const jsonWebToken = new JsonWebToken(response);
  const jwt = jsonWebToken.createJwt();
  res.send(jwt);
});

router.post("/student", verifyUserByToken, userExist, async ({ body }, res) => {
  const registration = new Registration(body);
  const response = await registration.registerAsStudent();
  const jsonWebToken = new JsonWebToken(response);
  const jwt = jsonWebToken.createJwt();
  res.send(jwt);
});

module.exports = router;
