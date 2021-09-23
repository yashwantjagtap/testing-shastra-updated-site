"use strict";

var router = require("express").Router();

var middleware = require("./middleware");

var IndexModel = require("../app/model/IndexModel");

var EmailModule = require("../app/model/emailModel");

var emailTemplate = require("../app/model/emailTemplate");
/* GET home page. */


router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Testing Shastra | Training | Placement"
  });
});
router.get("/assignments", function (req, res, next) {
  res.render("pages/assignments", {
    title: "Testing Shastra | Programs | Assignment"
  });
});
router.get("/notes", function (req, res, next) {
  res.render("pages/notes", {
    title: "Testing Shastra | Programs | Notes"
  });
});
router.get("/contact-us", function (req, res, next) {
  res.render("pages/contact_us", {
    title: "Testing Shastra | Contact Us | Get In Touch | Address"
  });
});
router.get("/recent-placements", middleware.checkForPoolConnection, function (req, res) {
  var years = [];
  IndexModel.getPlacementYear(res.pool).then(function (result) {
    years = result;
    return IndexModel.getPlacementList(res.pool);
  }).then(function (result) {
    res.render("pages/Recent_Placements", {
      title: "Testing Shastra | Contact Us | Get In Touch | Address",
      list: result,
      years: years
    });
  })["catch"](function (error) {
    res.send({
      call: 0,
      error: error
    });
  });
  return false; // id: 5,
  // emp_name: "MAYURI T.",
  // emp_company: "TCS",
  // emp_package: "6.50LPA",
  // emp_year: 2017,
});
router.get("/registration", function (req, res, next) {
  res.render("pages/registration", {
    title: "Testing Shastra | Contact Us | Get In Touch | Address"
  });
});
router.get("/assignments/:ass_name", function (req, res, next) {
  var data = req.params.ass_name;

  switch (data) {
    case "confirmation-alert":
      res.render("assignments/ConfirmationAlert", {
        title: "Testing Shastra Assignments | ConfirmationAlert"
      });
      break;

    case "prompt":
      res.render("assignments/Prompt", {
        title: "Testing Shastra Assignments | Prompt"
      });
      break;

    case "simple-alert":
      res.render("assignments/SimpleAlert", {
        title: "Testing Shastra Assignments | SimpleAlert"
      });
      break;

    case "windowHandlingDemo":
      res.render("assignments/windowHandlingDemo", {
        title: "Testing Shastra Assignments | windowHandlingDemo"
      });
      break;

    case "parent-window":
      res.render("assignments/ParentWindow", {
        title: "Testing Shastra Assignments | ParentWindow"
      });
      break;

    case "drag-and-drop":
      res.render("assignments/DragAndDrop", {
        title: "Testing Shastra Assignments | DragAndDrop"
      });
      break;

    case "drop-down":
      res.render("assignments/DropDown", {
        title: "Testing Shastra Assignments | DropDown"
      });
      break;

    case "Tooltip":
      res.render("assignments/Tooltip", {
        title: "Testing Shastra Assignments | ToolTip"
      });
      break;

    default:
      res.redirect("/");
      break;
  }
});
router.get("/course/automation-testing", function (req, res, next) {
  res.render("pages/course", {
    title: "Testing Shastra | Contact Us | Get In Touch | Address"
  });
});
router.get("/course/python-selenium", function (req, res, next) {
  res.render("pages/python", {
    title: "Testing Shastra | Contact Us | Get In Touch | Address"
  });
});
router.get("/course/java-full-stack", function (req, res, next) {
  res.render("pages/java_full_stack", {
    title: "Testing Shastra | Contact Us | Get In Touch | Address"
  });
});
router.get("/course/mern-stack", function (req, res, next) {
  res.render("pages/mern", {
    title: "Testing Shastra | Contact Us | Get In Touch | Address"
  });
});
router.get("/course/rest-api-developer", function (req, res, next) {
  res.render("pages/restApi", {
    title: "Testing Shastra | Contact Us | Get In Touch | Address"
  });
});
router.get("/webinar-registration", function (req, res, next) {
  res.render("pages/registration", {
    title: "Testing Shastra | Contact Us | Get In Touch | Address"
  });
});
router.post("/save-webinar-candidate", middleware.checkForPoolConnection, function (req, res) {
  var data = req.body;
  IndexModel.addNewStudent(res.pool, data).then(function (result) {
    var smsData = {
      to: data.candidateEmailId,
      subject: "Testing Shastra™️ Registration For Live Webinar on Selenium 👍",
      message: emailTemplate.webinar("".concat(data.candidateFName, " ").concat(data.candidateLName))
    };
    return EmailModule.sendEmailGmail(smsData);
  }).then(function (result) {
    res.status(200).send({
      call: 1,
      result: result
    });
  })["catch"](function (error) {
    res.status(500).send({
      call: 0,
      error: error
    });
  });
});
router.post("/save-enquiry", function (req, res) {
  var data = req.body;
  var smsData = {
    to: data.contactEmailId,
    subject: "Enquiry On Testing Shastra",
    message: emailTemplate.enquiry(data)
  };
  EmailModule.sendEmailGmail(smsData).then(function (result) {
    res.status(200).send({
      call: 1,
      result: result
    });
  })["catch"](function (error) {
    res.status(500).send({
      call: 0,
      error: error
    });
  });
});
module.exports = router;
//# sourceMappingURL=commonRoute.dev.js.map
