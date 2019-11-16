const MailService = require("./MailService");
// eslint-disable-next-line no-unused-vars
module.exports = obj => {
  const { email, name } = obj;
  const subject = `${name} ברוך הבא`;
  const mailService = new MailService(
    email,
    subject,
    "heyy there",
    "<p>dsfdsf</p>"
  );
  mailService.sendEmail();
};
