const mongoose = require("mongoose"),
  Teacher = mongoose.model("Teacher"),
  Student = mongoose.model("Student");

module.exports = class Registration {
  constructor(userDetails) {
    this.userDetails = userDetails;
  }

  async registerAsTeacher() {
    // console.log(this.userDetails);
    const teacher = new Teacher(this.userDetails);
    const res = await teacher.save();
    return res;
  }

  async registerAsStudent() {
    // console.log(this.userDetails);
    const student = new Student(this.userDetails);
    const res = await student.save();
    return res;
  }
};
