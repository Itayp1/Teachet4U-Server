require("../models/Teacher");

const mongoose = require("mongoose"),
  TeacherQuery = mongoose.model("Teacher");
mongoose.set("useFindAndModify", false);
const email = "peretz.itay11@gmail.com";

TeacherQuery.findOneAndRemove({ email });
