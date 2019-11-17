const router = require("express").Router();
const verifyToken = require("../../middleware/verifyToken");
router.get("/mock", verifyToken, (req, res, next) => {
  res.send("ok");
});
module.exports = router;
