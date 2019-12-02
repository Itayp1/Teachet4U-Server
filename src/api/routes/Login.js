const router = require("express").Router(),
  verifyRegisteredUserByToken = require("../../middleware/verifyRegisteredUserByToken");

router.get("/", (req, res) => {
  const { profile } = res.locals;
  res.send({ profile });
});
module.exports = router;
