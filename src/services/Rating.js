const mongoose = require("mongoose"),
  RatingDb = mongoose.model("Rating");
module.exports = class Rating {
  constructor(lessonId, rating, review, teacherEmail, studentName) {
    this.lessonId = lessonId;
    this.rating = rating;
    this.review = review;
    this.teacherEmail = teacherEmail;
    this.studentMail = studentName;
  }

  async addReview() {
    const review = new RatingDb(this);
    const response = await review.save();
    console.log(response);
    return true;
  }
};
