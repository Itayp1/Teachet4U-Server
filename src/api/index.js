const router = require("express").Router();
const MOCK = require("./routes/mock");

router.use("/", MOCK);

module.exports = router;
