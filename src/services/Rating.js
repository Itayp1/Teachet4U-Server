const mongoose = require("mongoose"),
  RatingDb = mongoose.model("Rating");
module.exports = class Rating {
  constructor(teacherEmail, lessonId, rating, review, studentName) {
    this.lessonId = lessonId;
    this.rating = rating;
    this.review = review;
    this.teacherEmail = teacherEmail;
    this.studentName = studentName;
  }

  async addReview() {
    const review = new RatingDb(this);
    const response = await review.save();
    console.log(response);
    return true;
  }

  async getReviews() {
    const listofReviews = await RatingDb.find({
      teacherEmail: this.teacherEmail
    });

    return listofReviews;
  }
};
