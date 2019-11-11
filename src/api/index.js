const router = require("express").Router(),
  MOCK = require("./routes/mock"),
  REGISTRATION = require("./routes/registration"),
  SearchTeacher = require("./routes/SearchTeacher");

router.use("/", MOCK);
router.use("/registration", REGISTRATION);
router.use("/searchTeacher", SearchTeacher);

module.exports = router;
