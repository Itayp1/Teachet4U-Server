const User = require("./User"),
  mongoose = require("mongoose"),
  TeacherQuery = mongoose.model("Teacher"),
  TimeTable = mongoose.model("TimeTable"),
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
  async getAvaiableTime(date) {
    const takenLessons = await TimeTable.find({
      teacherEmail: this.email,
      date
    });
    const avaiablesHours = takenLessons.map(obj => {
      return obj.time;
    });

    return { avaiablesHours };
  }

  async updateInfo() {
    console.log(this.email);
    const result = TeacherQuery.findOneAndUpdate(
      { email: this.email },
      this.email
    );
    return result;
  }
}
module.exports = Teacher;
