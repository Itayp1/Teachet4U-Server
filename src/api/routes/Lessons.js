const router = require("express").Router(),
  GetAvaiableTime = require("../../services/Teacher"),
  verifyRegisteredUserByToken = require("../../middleware/verifyRegisteredUserByToken"),
  Lesson = require("../../services/Lessons");

require("express-async-errors");

router.get("/getavaiabletime", async (req, res) => {
  const { email, date } = req.query;
  const getAvaiableTime = new GetAvaiableTime(email);
  const result = await getAvaiableTime.getAvaiableTime(date);
  res.json(result);
});

router.post(
  "/appointmentLesson",

  async (req, res) => {
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
  }
);

router.get("/timetable", async (req, res) => {
  const { email } = req.query;

  const timeTable = new Lesson(email);

  const result = await timeTable.getTimeTable();
  res.json({ timeTable: result });
});
module.exports = router;
