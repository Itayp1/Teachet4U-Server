const mongoose = require("mongoose"),
  Teacher = mongoose.model("Teacher"),
  CError = require("../services/CustomError");

module.exports = class SearchTeacher {
  constructor(location, course) {
    this.location = location;
    this.course = course;
  }

  async getListOfTeachers() {
    console.log(this.location + this.course);
    const res = await Teacher.find({ location }, { courses: this.course });
    if (!res) throw new CError("Teachers Not Found", 404);
    console.log(res);
    return res;
  }
};
