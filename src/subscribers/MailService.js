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
  constructor(to, subject, text, html) {
    this.mailOptions = {
      from: "Teacher4U@Teacher4U.com",
      to,
      subject,
      text,
      html
    };
  }

  sendEmail() {
    // let mailOptions = {
    //   from: "Teacher4U@Teacher4U.com",
    //   to: "peretz.itay@gmail.com",
    //   subject: "ברוך הבא",
    //   text: "Wooohooo it works!!",
    //   html: "<p>NUMBER 1</p>" // html body emailBody
    // };
    console.log(this.mailOptions);
    transporter.sendMail(this.mailOptions, (err, data) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(JSON.stringify(data));
    });
  }
};
