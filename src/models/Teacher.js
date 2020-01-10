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
    required: true,
    enum: ["Male", "Female"]
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
    type: [],
    required: true,
    default: undefined
  },
  studyCities: {
    type: [],
    required: true,
    default: undefined
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
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  availablesDays: {
    type: [Number],
    required: true,
    default: undefined
  },
  avaiablesHours: {
    type: [Number],
    required: true,
    default: undefined
  },
  rating: {
    type: Number,
    required: true
  },
  profile: {
    type: String,
    required: true
  }
});

mongoose.model("Teacher", TeacherSchema);
