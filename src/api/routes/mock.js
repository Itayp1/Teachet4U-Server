const router = require("express").Router();

router.get("/mock", (req, res) => {
  res.send("ok");
});
module.exports = router;
