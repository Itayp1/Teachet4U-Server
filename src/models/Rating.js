const mongoose = require("mongoose");

const RatingSchema = new mongoose.Schema({
  lessonId: {
    type: String,
    required: true
  },
  rating: {
    type: String,
    required: true
  },
  review: {
    type: String,
    required: true
  },
  teacherEmail: {
    type: String,
    required: true
  },
  studentName: {
    type: String,
    required: true
  }
});

mongoose.model("Rating", RatingSchema);
