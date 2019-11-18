const router = require("express").Router(),
  verifytoken = require("../../middleware/verifyToken");

router.get("/", verifytoken, (req, res) => {
  res.send("ok");
});
module.exports = router;
