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
    type: Date,
    required: true
  },
  time: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    required: true
  }
});

mongoose.model("TimeTable", TimeTableSchema);
