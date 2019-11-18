const router = require("express").Router(),
  LOGIN = require("./routes/Login"),
  REGISTRATION = require("./routes/registration"),
  SearchTeacher = require("./routes/SearchTeacher"),
  Lessons = require("./routes/Lessons"),
  UpdateInfo = require("./routes/UpdateInfo");
router.use("/login", LOGIN);
router.use("/registration", REGISTRATION);
router.use("/searchTeacher", SearchTeacher);
router.use("/lessons", Lessons);
router.use("/updateInfo", UpdateInfo);

module.exports = router;
