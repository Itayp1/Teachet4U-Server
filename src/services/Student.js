const User = require("./User"),
  mongoose = require("mongoose"),
  StudentQuery = mongoose.model("Student"),
  CError = require("../services/CustomError");

module.exports = class Student extends User {
  super(email, name, lastname, age, gender, city, phone, profile) {}

  async isExist() {
    const { email } = this;
    const isExist = await StudentQuery.findOne({ email });
    if (isExist) throw new CError("User already registered.", 400);
  }


};
