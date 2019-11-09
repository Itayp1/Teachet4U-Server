const mongoose = require("mongoose");

const TeacherSchema = new mongoose.Schema({
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
  lastname: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  pic: {
    type: String,
    required: true
  },
  courses: {
    type: String,
    required: true
  },
  studyCities: {
    type: String,
    required: true
  },
  university: {
    type: String,
    required: true
  },
  generalDescription: {
    type: String,
    required: true
  },
  priceAtStudent: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  availablesDays: {
    type: String
  },
  avaiablesHours: {
    type: String,
    required: true
  },
  rating: {
    type: String,
    required: true
  }
});

mongoose.model("Teacher", TeacherSchema);
