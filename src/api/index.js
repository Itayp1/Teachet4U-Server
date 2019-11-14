const router = require("express").Router(),
  MOCK = require("./routes/mock"),
  REGISTRATION = require("./routes/registration"),
  SearchTeacher = require("./routes/SearchTeacher"),
  Lessons = require("./routes/Lessons");

router.use("/", MOCK);
router.use("/registration", REGISTRATION);
router.use("/searchTeacher", SearchTeacher);
router.use("/lessons", Lessons);

module.exports = router;
