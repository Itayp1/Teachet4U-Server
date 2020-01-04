const router = require("express").Router(),
  LOGIN = require("./routes/Login"),
  REGISTRATION = require("./routes/registration"),
  SearchTeacher = require("./routes/SearchTeacher"),
  Lessons = require("./routes/Lessons"),
  Rating = require("./routes/Rating"),
  UpdateInfo = require("./routes/Information");
router.use("/login", LOGIN);
router.use("/registration", REGISTRATION);
router.use("/searchTeacher", SearchTeacher);
router.use("/lessons", Lessons);
router.use("/information", UpdateInfo);
router.use("/rating", Rating);

module.exports = router;
