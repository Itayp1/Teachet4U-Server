const mongoose = require("mongoose");

const TimeTableSchema = new mongoose.Schema({
  teacherEmail: {
    type: String,
    required: true
  },
  teacherName: {
    type: String,
    required: true
  },
  studentEmail: {
    type: String,
    required: true
  },
  studentName: {
    type: String,
    required: true
  },
  hasReview: {
    type: Boolean,
    required: false
  },
  cource: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  time: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    default: "awating"
  }
});

mongoose.model("TimeTable", TimeTableSchema);
