var nodemailer = require("nodemailer");

module.exports = {
  sendEmailGmail: function (data) {
    return new Promise(function (resolve, reject) {
      var gmailU = "info@testingshastra.com";

      var transporter = nodemailer.createTransport({
        pool: true,
        host: "mail.testingshastra.com",
        port: 465,
        secure: true, // upgrade later with STARTTLS
        auth: {
          user: gmailU,
          pass: "Omsairam@800",
        },
      });

      var mailOptions = {
        from: `Testing Shastra <${gmailU}>`,
        to: data.to,
        subject: data.subject,
        html: data.message,
      };
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error, "error");
          reject({ cal: error });
        } else {
          console.log("Email sent: " + info.response);
          resolve({ cal: info.response });
        }
      });
    });
  },
};
