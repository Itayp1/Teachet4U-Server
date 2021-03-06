const User = require("./User"),
  mongoose = require("mongoose"),
  StudentQuery = mongoose.model("Student"),
  // CError = require("../services/CustomError"),
  _ = require("lodash");
mongoose.set("useFindAndModify", false);
const uploadPic = require("./uploadPicture");

module.exports = class Student extends User {
  constructor(email, fullnName, age, gender, city, phone, profile) {
    // eslint-disable-next-line no-undef
    super(email, fullnName, age, gender, city, phone, profile);
  }

  async isExist() {
    const { email } = this;
    const isExist = await StudentQuery.findOne({ email });
    if (isExist) return isExist;
  }

  async updateInfo(details) {
    try {
      let obj = {};
      for (let key in details) {
        key != "email" && key != "pic" ? (obj[key] = details[key]) : null;
      }
      let result = await StudentQuery.findOneAndUpdate(
        { email: this.email },
        {
          $set: obj
        }
      );
      _.assign(result, obj);

      return result;
    } catch (error) {
      console.log("error");

      console.log(error);
    }
  }

  async getInfo() {
    const result = await StudentQuery.findOne({ email: this.email });
    return result;
  }
  async addPicture(img) {
    const pic = await uploadPic(img);

    await StudentQuery.findOneAndUpdate({ email: this.email }, { pic });
    return pic;
  }
};
