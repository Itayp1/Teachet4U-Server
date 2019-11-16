const MailService = require("./MailService");
// eslint-disable-next-line no-unused-vars
module.exports = (recipient, subject, textMsg, htmlMsg) => {
  const mailService = new MailService(
    recipient,
    subject,
    "heyy there",
    "<p>dsfdsf</p>"
  );
  mailService.sendEmail();
};
