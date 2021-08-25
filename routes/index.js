let router = require("express").Router();
let commonRoute = require("./commonRoute");
router.use("/", commonRoute);
module.exports = router;
