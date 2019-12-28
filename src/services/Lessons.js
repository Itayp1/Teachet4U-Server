const mongoose = require("mongoose"),
  TimeTable = mongoose.model("TimeTable");

module.exports = class Lessons {
  constructor(
    teacherEmail,
    teacherName,
    studentEmail,
    studentName,
    cource,
    date,
    time,
    status,
    name
  ) {
    this.teacherEmail = teacherEmail;
    this.teacherName = teacherName;
    this.studentEmail = studentEmail;
    this.studentName = studentName;
    this.cource = cource;
    this.date = date;
    this.time = time;
    this.status = status;
    this.name = name;
  }

  async appointmentLesson() {
    const timeTable = new TimeTable(this);
    const result = await timeTable.save();
    return result;
  }
  async getTimeTable(email, profile) {
    console.log(email);
    if (profile == "student") {
      let timeTable = await TimeTable.find({ studentEmail: email });
      const mapResult = timeTable.map(tmp => {
        const obj = {};
        (obj.status = tmp.status),
          (obj.email = tmp.teacherEmail),
          (obj.name = tmp.teacherName),
          (obj.date = tmp.date),
          (obj.time = tmp.time);

        return obj;
      });
      return mapResult;
    } else if (profile == "teacher") {
      let timeTable = await TimeTable.find({ teacherEmail: email });
      const mapResult = timeTable.map(tmp => {
        const obj = {};
        (obj.status = tmp.status),
          (obj.email = tmp.teacherEmail),
          (obj.name = tmp.teacherName),
          (obj.date = tmp.date),
          (obj.time = tmp.time);

        return obj;
      });
      return mapResult;
    }
    throw new Error("unknoun Profile");
  }
};
