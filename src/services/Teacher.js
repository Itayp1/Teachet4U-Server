const User = require("./User"),
  mongoose = require("mongoose"),
  StudentQuery = mongoose.model("Teacher"),
  CError = require("../services/CustomError");

class Teacher extends User {
  constructor(
    name,
    lastname,
    email,
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
    super(name, lastname, email, age, gender, city, phone, profile);
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
    const isExist = await StudentQuery.findOne({ email });
    if (isExist) throw new CError("User already registered.", 400);
  }
}
module.exports = Teacher;
