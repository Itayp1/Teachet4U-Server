const User = require("./User"),
  mongoose = require("mongoose"),
  StudentQuery = mongoose.model("Student"),
  CError = require("../services/CustomError");

module.exports = class Student extends User {
  // eslint-disable-next-line no-unused-vars
  super(email, name, lastname, age, gender, city, phone, profile) {}

  async isExist() {
    const { email } = this;
    const isExist = await StudentQuery.findOne({ email });
    if (isExist) throw new CError("User already registered.", 400);
  }
};
