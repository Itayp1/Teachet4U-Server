const router = require("express").Router(),
  SearchTeacher = require("../../services/SearchTeacher");

require("express-async-errors");

router.get("/", async (req, res, next) => {
  const { location, course } = req.query;
  const searchTeacher = new SearchTeacher(location, course);
  const result = await searchTeacher.getListOfTeachers();
  console.log(result);
  res.json(result);
});

module.exports = router;
