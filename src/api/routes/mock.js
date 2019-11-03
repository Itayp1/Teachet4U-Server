const router = require("express").Router();

module.exports = router.get("/mock", (req, res) => {
  res.send("ok");
});
