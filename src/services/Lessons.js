const mongoose = require("mongoose"),
  TimeTable = mongoose.model("TimeTable");

module.exports = class Lessons {
  constructor(teacherEmail, studentEmail, cource, date, time, status) {
    this.teacherEmail = teacherEmail;
    this.studentEmail = studentEmail;
    this.cource = cource;
    this.date = date;
    this.time = time;
    this.status = status;
  }

  async appointmentLesson() {
    const timeTable = new TimeTable(this);
    const result = await timeTable.save();
    return result;
  }
  async getTimeTable(email) {
    const timeTable = await TimeTable.find({ email });
    return timeTable;
  }
};
