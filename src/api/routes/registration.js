const router = require("express").Router();

router.post("/teacher", (req, res) => {
  res.send("teacher");
});

router.post("/student", (req, res) => {
  res.send("student");
});

module.exports = router;
