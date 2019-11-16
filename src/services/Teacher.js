const User = require("./User"),
  mongoose = require("mongoose"),
  TeacherQuery = mongoose.model("Teacher"),
  TimeTable = mongoose.model("TimeTable"),
  CError = require("../services/CustomError"),
  _ = require("lodash");
mongoose.set("useFindAndModify", false);

class Teacher extends User {
  // prettier-ignore
  constructor(email, name, lastname, age, gender, city, phone, profile, pic, courses, studyCities, university, generalDescription, priceAtStudent, price, availablesDays, avaiablesHours, rating 
  ) {
    super(email, name, lastname, age, gender, city, phone, profile);
     this.pic = pic,
      this.courses = courses,
      this.studyCities = studyCities,
      this.university = university,
      this.generalDescription = generalDescription,
      this.priceAtStudent = priceAtStudent,
      this.price = price,
      this.availablesDays = availablesDays,
      this.avaiablesHours = avaiablesHours,
      this.rating = rating;
      
  //    console.log(this);

  }

  async isExist() {
    const { email } = this;
    const isExist = await TeacherQuery.findOne({ email });
    // if (isExist) throw new CError("User already registered.", 400);
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

  async updateInfo(details) {
    let obj = {};
    for (let key in details) {
      key != "email" ? (obj[key] = details[key]) : null;
    }
    let result = await TeacherQuery.findOneAndUpdate(
      { email: this.email },
      {
        $set: obj
      }
    );
    _.assign(result, obj);
    return result;
  }
  async getInfo() {
    const result = await TeacherQuery.findOne({ email: this.email });
    return result;
  }
}

module.exports = Teacher;
