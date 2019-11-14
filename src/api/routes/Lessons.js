const router = require("express").Router(),
  GetAvaiableTime = require("../../services/Teacher");

require("express-async-errors");

router.get("/getavaiabletime", async (req, res, next) => {
  const { email } = req.query;
  const getAvaiableTime = new GetAvaiableTime(email);
  const result = await getAvaiableTime.getAvaiableTime();
  res.json(result);
});

module.exports = router;
