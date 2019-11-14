const mongoose = require("mongoose");

const TimeTableSchema = new mongoose.Schema({
  teacherEmail: {
    type: String,
    required: true
  },
  studentEmail: {
    type: String,
    required: true
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
    type: String,
    required: true
  },
  status: {
    type: String,
    default: "awating"
  }
});

mongoose.model("TimeTable", TimeTableSchema);
