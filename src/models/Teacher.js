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
    enum: ["נקבה", "זכר"]
  },
  fullName: {
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
    required: false
  },
  courses: {
    type: [String],
    required: true
  },
  studyCities: {
    type: [String],
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
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  availablesDays: {
    type: [String],
    required: true,
    default: undefined
  },
  avaiablesHours: {
    type: [String],
    required: true,
    default: undefined
  },
  rating: {
    type: Number,
    default: 0
  },
  profile: {
    type: String,
    required: true
  }
});

mongoose.model("Teacher", TeacherSchema);
