const router = require("express").Router();
const MailService = require("./MailService");
const mailgen = require("../../../content/RegistrationHtml");
const htmlBody = mailgen("itayp");
const subject = `itayברוך הבא`;

router.get("/", async (req, res) => {
  const { email, messageId } = req.query;
  console.log(messageId);
  const mailService = new MailService(
    email,
    subject,
    "heyy there",
    htmlBody,
    messageId
  );
  mailService.sendEmail();
  res.json({ status: "sendemail" });
});

module.exports = router;
