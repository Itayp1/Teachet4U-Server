const mongoose = require("mongoose");

const Teacherschema = new mongoose.Schema({
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
  availablesdays: {
    type: String
  },
  courses: {
    type: String,
    required: true
  },
  avaiablesgours: {
    type: String,
    required: true
  },
  rating: {
    type: String,
    required: true
  }
});

mongoose.model("Teacher", Teacherschema);
