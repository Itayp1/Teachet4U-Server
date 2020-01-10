const User = require("./User"),
  mongoose = require("mongoose"),
  TeacherQuery = mongoose.model("Teacher"),
  TimeTable = mongoose.model("TimeTable"),
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
    console.log(email);
    const isExist = await TeacherQuery.findOne({ email });
    if (isExist) {
      return isExist;
    } else {
      return false;
    }
  }

  async getAvaiableTime(date) {
    const { email } = this;
    const { avaiablesHours, availablesDays } = await TeacherQuery.findOne({
      email
    });
    console.log(availablesDays);
    console.log(date);

    console.log(new Date(date).getDay());
    console.log(availablesDays[new Date(date).getDay()]);
    if (!availablesDays[new Date(date).getDay()]) {
      return [];
    }

    let takenLessons = await TimeTable.find({
      teacherEmail: this.email,
      date
    });
    takenLessons = takenLessons.map(({ time }) => time);
    console.log(takenLessons);

    const avaiables = avaiablesHours.filter(
      houer => !takenLessons.includes(houer)
    );
    console.log("avaiables");
    console.log(avaiables);
    // const avaiablesHours = takenLessons.map(obj => {
    //   return obj.time;
    // });
    return { avaiables, availablesDays };
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
    console.log;
    const result = await TeacherQuery.findOne({ email: this.email });
    return result;
  }
}

module.exports = Teacher;
