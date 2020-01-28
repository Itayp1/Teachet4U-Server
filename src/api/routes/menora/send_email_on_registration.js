const MailService = require("./MailService");
const mailgen = require("../amils/RegistrationHtml");

const htmlBody = mailgen("itayp");
const subject = `itayברוך הבא`;

const mailService = new MailService(
  "inbals@microsoft.com",
  subject,
  "heyy there",
  htmlBody
);
mailService.sendEmail();
