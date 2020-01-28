const router = require("express").Router(),
  Rating = require("../../services/Rating"),
  ValidateJwt = require("../../middleware/ValidateJwt"),
  addReviewValidation = require("../../middleware/addReviewValidation");

router.post("/add", ValidateJwt, addReviewValidation, async (req, res) => {
  const { rating, review, teacherEmail, lessonId } = req.body;
  const { name: studentName } = res.locals.jwt;
  const ratingObj = new Rating(
    teacherEmail,
    lessonId,
    rating,
    review,

    studentName
  );
  await ratingObj.addReview();

  return res.json({ status: "rating added sucsesfully" });
});

router.get("/:teacherEmail", ValidateJwt, async (req, res) => {
  let { teacherEmail } = req.params;
  if (!teacherEmail) {
    teacherEmail = req.body.email;
  }
  console.log(teacherEmail);
  const rating = new Rating(teacherEmail);
  const listOfReviews = await rating.getReviews();

  return res.json(listOfReviews);
});
router.get("/", ValidateJwt, async (req, res) => {
  const teacherEmail = req.body.email;

  console.log(teacherEmail);
  const rating = new Rating(teacherEmail);
  const listOfReviews = await rating.getReviews();

  return res.json(listOfReviews);
});
module.exports = router;
