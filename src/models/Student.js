const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  age: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  fullName: {
    type: String,
    required: true
  },
  pic: {
    type: String,
    required: false
  },
  city: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  profile: {
    type: String,
    required: true
  }
});

mongoose.model("Student", StudentSchema);
