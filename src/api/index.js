const router = require("express").Router(),
  MOCK = require("./routes/mock"),
  REGISTRATION = require("./routes/registration"),
  SearchTeacher = require("./routes/SearchTeacher"),
  Lessons = require("./routes/Lessons"),
  UpdateInfo = require("./routes/UpdateInfo");
router.use("/", MOCK);
router.use("/registration", REGISTRATION);
router.use("/searchTeacher", SearchTeacher);
router.use("/lessons", Lessons);
router.use("/updateInfo", UpdateInfo);

module.exports = router;
