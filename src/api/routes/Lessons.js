const router = require("express").Router(),
  GetAvaiableTime = require("../../services/Teacher"),
  Lesson = require("../../services/Lessons");

require("express-async-errors");

router.get("/getavaiabletime", async (req, res, next) => {
  const { email, date } = req.query;
  const getAvaiableTime = new GetAvaiableTime(email);
  const result = await getAvaiableTime.getAvaiableTime(date);
  res.json(result);
});

router.post("/appointmentLesson", async (req, res, next) => {
  const { teacherEmail, studentEmail, cource, date, time, status } = req.body;
  const lesson = new Lesson(
    teacherEmail,
    studentEmail,
    cource,
    date,
    time,
    status
  );
  const result = await lesson.appointmentLesson();
  res.json(result);
});

module.exports = router;
