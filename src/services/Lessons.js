const mongoose = require("mongoose"),
  TimeTable = mongoose.model("TimeTable"),
  CError = require("../services/CustomError");

module.exports = class Lessons {
  constructor(teacherEmail, StudentEmail, cource, date, time, status) {
    this.teacherEmail = teacherEmail;
    this.StudentEmail = StudentEmail;
    this.cource = cource;
    this.date = date;
    this.time = time;
    this.status = status;
  }

  async appointmentLesson() {}
};
