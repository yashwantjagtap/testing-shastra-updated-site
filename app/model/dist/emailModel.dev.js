"use strict";

var nodemailer = require("nodemailer");

module.exports = {
  sendEmailGmail: function sendEmailGmail(data) {
    return new Promise(function (resolve, reject) {
      var gmailU = "admissions@testingshastra.com";
      var transporter = nodemailer.createTransport({
        pool: true,
        host: "mail.testingshastra.com",
        port: 465,
        secure: true,
        // upxgrade later with STARTTLS
        auth: {
          user: gmailU,
          pass: "Insecure@123"
        }
      });
      var mailOptions = {
        from: "Testing Shastra <".concat(gmailU, ">"),
        to: data.to,
        subject: data.subject,
        html: data.message
      };
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error, "error");
          reject({
            cal: error
          });
        } else {
          console.log("Email sent: " + info.response);
          resolve({
            cal: info.response
          });
        }
      });
    });
  }
};
//# sourceMappingURL=emailModel.dev.js.map
