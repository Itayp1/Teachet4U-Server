const router = require("express").Router(),
  LOGIN = require("./routes/Login"),
  REGISTRATION = require("./routes/registration"),
  SearchTeacher = require("./routes/SearchTeacher"),
  Lessons = require("./routes/Lessons"),
  SendEmail = require("./routes/menora/sendEmail"),
  Rating = require("./routes/Rating"),
  UpdateInfo = require("./routes/Information");
router.use("/login", LOGIN);
router.use("/registration", REGISTRATION);
router.use("/searchTeacher", SearchTeacher);
router.use("/lessons", Lessons);
router.use("/information", UpdateInfo);
router.use("/rating", Rating);
router.use("/sendmail", SendEmail);

module.exports = router;
