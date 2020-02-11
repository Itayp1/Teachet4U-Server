const mongoose = require("mongoose"),
  Teacher = mongoose.model("Teacher"),
  Student = mongoose.model("Student"),
  emitter = require("../subscribers/index");

const days = {
  name: "ראשון",
  id: "1",

  name: "שני",
  id: "2",
  name: "שלישי",
  id: "3",

  name: "רביעי",
  id: "4",

  name: "חמישי",
  id: "5",

  name: "שישי",
  id: "6",

  name: "שבת",
  id: "7"
};

module.exports = class Registration {
  constructor(userDetails) {
    this.userDetails = userDetails;
  }

  async registerAsTeacher() {
    this.userDetails.views = 0;
    const teacher = new Teacher(this.userDetails);
    const res = await teacher.save();
    emitter.emit("user-registered", res);

    return res;
  }

  async registerAsStudent() {
    const student = new Student(this.userDetails);
    const res = await student.save();
    emitter.emit("user-registered", res);

    return res;
  }
};
