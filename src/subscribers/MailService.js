const nodemailer = require("nodemailer"),
  Logger = require("../loaders/looger"),
  config = require("../../server.config");

const transporter = nodemailer.createTransport({
  host: config.SMTP_HOST,
  auth: {
    user: config.SMTP_USER,
    pass: process.env.SMTP_PASS
  },
  port: config.SMTP_PORT
});

module.exports = class Lessons {
  constructor(recipient, subject, textBody, htmlBody) {
    this.mailOptions = {
      from: "teacher4u.app@gmail.com",
      to: recipient,
      subject: subject
    };
    textBody ? (this.mailOptions.text = textBody) : null;
    htmlBody ? (this.mailOptions.html = htmlBody) : null;
  }

  sendEmail() {
    let mailOptions = {
      from: "Teacher4U@Teacher4U.com",
      to: "peretz.itay@gmail.com",
      subject: "ברוך הבא",
      text: "Wooohooo it works!!",
      html: "<p>NUMBER 1</p>" // html body emailBody
    };
    console.log(mailOptions);
    transporter.sendMail(mailOptions, (err, data) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(JSON.stringify(data));
    });
  }
};
