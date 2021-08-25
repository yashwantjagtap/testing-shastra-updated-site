var router = require("express").Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Testing Shastra | Training | Placement" });
});

router.get("/assignments", function (req, res, next) {
  res.render("pages/assignments", {
    title: "Testing Shastra | Programs | Assignment",
  });
});
router.get("/contact-us", function (req, res, next) {
  res.render("pages/contact_us", {
    title: "Testing Shastra | Contact Us | Get In Touch | Address",
  });
});

router.get("/assignments/:ass_name", function (req, res, next) {
  var data = req.params.ass_name;
  switch (data) {
    case "confirmation-alert":
      res.render("assignments/ConfirmationAlert", {
        title: "Testing Shastra Assignments | ConfirmationAlert",
      });
      break;
    case "prompt":
      res.render("assignments/Prompt", {
        title: "Testing Shastra Assignments | Prompt",
      });
      break;

    case "simple-alert":
      res.render("assignments/SimpleAlert", {
        title: "Testing Shastra Assignments | SimpleAlert",
      });
      break;

    case "windowHandlingDemo":
      res.render("assignments/windowHandlingDemo", {
        title: "Testing Shastra Assignments | windowHandlingDemo",
      });
      break;
    case "":
      res.render("assignments/", {
        title: "Testing Shastra Assignments | ",
      });
      break;

    case "parent-window":
      res.render("assignments/ParentWindow", {
        title: "Testing Shastra Assignments | ParentWindow",
      });
      break;
    case "drag-and-drop":
      res.render("assignments/DragAndDrop", {
        title: "Testing Shastra Assignments | DragAndDrop",
      });
      break;
    case "drop-down":
      res.render("assignments/DropDown", {
        title: "Testing Shastra Assignments | DropDown",
      });
      break;
    case "Tooltip":
      res.render("assignments/ToolTip", {
        title: "Testing Shastra Assignments | ToolTip",
      });
      break;
    default:
      res.redirect("/");
      break;
  }
});

router.get("/course/automation-testing", function (req, res, next) {
  res.render("pages/course", {
    title: "Testing Shastra | Contact Us | Get In Touch | Address",
  });
});

router.get("/course/python-selenium", function (req, res, next) {
  res.render("pages/python", {
    title: "Testing Shastra | Contact Us | Get In Touch | Address",
  });
});

router.get("/course/java-full-stack", function (req, res, next) {
  res.render("pages/java_full_stack", {
    title: "Testing Shastra | Contact Us | Get In Touch | Address",
  });
});

router.get("/course/mern-stack", function (req, res, next) {
  res.render("pages/mern", {
    title: "Testing Shastra | Contact Us | Get In Touch | Address",
  });
});

router.get("/course/rest-api-developer", function (req, res, next) {
  res.render("pages/restApi", {
    title: "Testing Shastra | Contact Us | Get In Touch | Address",
  });
});


0.
module.exports = router;
