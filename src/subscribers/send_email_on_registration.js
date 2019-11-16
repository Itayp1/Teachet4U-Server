const MailService = require("./MailService");
const mailgen = require("../content/RegistrationHtml");

// Generate an HTML email with the provided contents

// eslint-disable-next-line no-unused-vars
module.exports = obj => {
  const { email, name } = obj;
  const htmlBody = mailgen(name);

  const subject = `${name} ברוך הבא`;

  const mailService = new MailService(email, subject, "heyy there", htmlBody);
  mailService.sendEmail();
};
