const mongoose = require("mongoose");

const TimeTableSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  lessions: {
    type: String,
    required: true
  },
  id2: {
    type: String,
    required: true
  },
  cources: {
    type: String,
    required: true
  },
  time: {
    type: Date,
    required: true
  },
  accepted: {
    type: Date,
    required: true
  },
  canceled: {
    type: Date,
    required: true
  }
});

mongoose.model("Chat", TimeTableSchema);
