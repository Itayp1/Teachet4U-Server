const router = require("express").Router(),
  verifyUserByToken = require("../../middleware/verifyUserByToken");

router.get("/", verifyUserByToken, (req, res) => {
  return res.json({ status: "Registration" });
});
module.exports = router;
