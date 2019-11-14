const User = require("./User"),
  mongoose = require("mongoose"),
  TeacherQuery = mongoose.model("Teacher"),
  CError = require("../services/CustomError");

class Teacher extends User {
  constructor(
    email,
    name,
    lastname,
    age,
    gender,
    city,
    phone,
    profile,
    pic,
    courses,
    studyCities,
    university,
    generalDescription,
    priceAtStudent,
    price,
    availablesDays,
    avaiablesHours,
    rating
  ) {
    super(email, name, lastname, age, gender, city, phone, profile);
    (this.pic = pic),
      (this.courses = courses),
      (this.studyCities = studyCities),
      (this.university = university),
      (this.generalDescription = generalDescription),
      (this.priceAtStudent = priceAtStudent),
      (this.price = price),
      (this.availablesDays = availablesDays),
      (this.avaiablesHours = avaiablesHours),
      (this.rating = rating);
  }

  async isExist() {
    const { email } = this;
    const isExist = await TeacherQuery.findOne({ email });
    if (isExist) throw new CError("User already registered.", 400);
  }
  async getAvaiableTime() {
    const { email } = this;

    const result = await TeacherQuery.findOne({
      email
    });
    if (!result) throw new CError("cannot find avaiable time", 500);

    const { avaiablesHours, availablesDays } = result;
    return { avaiablesHours, availablesDays };
  }
}
module.exports = Teacher;
