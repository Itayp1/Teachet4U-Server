const mongoose = require("mongoose");

const Studentschema = new mongoose.Schema({
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
  }
});

mongoose.model("Student", Studentschema);
