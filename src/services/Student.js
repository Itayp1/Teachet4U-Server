const User = require("./User"),
  mongoose = require("mongoose"),
  StudentQuery = mongoose.model("Student"),
  CError = require("../services/CustomError"),
  _ = require("lodash");
mongoose.set("useFindAndModify", false);

module.exports = class Student extends User {
  constructor(email, name, lastname, age, gender, city, phone, profile) {
    // eslint-disable-next-line no-undef
    super(email, name, lastname, age, gender, city, phone, profile);
  }

  async isExist() {
    const { email } = this;
    const isExist = await StudentQuery.findOne({ email });
    if (isExist) return isExist;
  }

  async updateInfo(details) {
    let obj = {};
    for (let key in details) {
      key != "email" ? (obj[key] = details[key]) : null;
    }
    let result = await StudentQuery.findOneAndUpdate(
      { email: this.email },
      {
        $set: obj
      }
    );
    _.assign(result, obj);
    return result;
  }

  async getInfo() {
    const result = await StudentQuery.findOne({ email: this.email });
    return result;
  }
};
