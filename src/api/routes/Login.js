const router = require("express").Router(),
  verifyRegisteredUserByToken = require("../../middleware/verifyRegisteredUserByToken");

router.get("/", verifyRegisteredUserByToken, (req, res) => {
  console.log(
    "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@"
  );
  res.send("ok");
});
module.exports = router;
