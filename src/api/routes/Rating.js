const router = require("express").Router(),
  Rating = require("../../services/Rating"),
  ValidateJwt = require("../../middleware/ValidateJwt"),
  addReviewValidation = require("../../middleware/addReviewValidation");

router.post("/add", ValidateJwt, addReviewValidation, async (req, res) => {
  const { rating, review, teacherEmail, lessonId } = req.body;
  const { name: studentName } = res.locals.jwt;

  const ratingObj = new Rating(
    lessonId,
    rating,
    review,
    teacherEmail,
    studentName
  );
  await ratingObj.addReview();

  return res.json({ status: "rating added sucsesfully" });
});
router.get("/", ValidateJwt, (req, res) => {
  return res.json({ status: "Registration" });
});
module.exports = router;
