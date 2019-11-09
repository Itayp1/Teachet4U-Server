const router = require("express").Router();
const MOCK = require("./routes/mock");
const REGISTRATION = require("./routes/registration");
router.use("/", MOCK);

router.use("/Registration", REGISTRATION);

module.exports = router;
