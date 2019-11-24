const router = require("express").Router(),
  SearchTeacher = require("../../services/SearchTeacher"),
  verifyRegisteredUserByToken = require("../../middleware/verifyRegisteredUserByToken");

require("express-async-errors");

router.get("/", verifyRegisteredUserByToken, async (req, res) => {
  const { city, course } = req.query;
  const searchTeacher = new SearchTeacher(city, course);
  const result = await searchTeacher.getListOfTeachers();
  res.json(result);
});

module.exports = router;
