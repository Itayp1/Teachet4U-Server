const mongoose = require("mongoose");

const ChatSchema = new mongoose.Schema({
  teacherId: {
    type: String,
    required: true
  },
  studentId: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true
  },
  time: {
    type: Date,
    required: true
  }
});

mongoose.model("Chat", ChatSchema);
