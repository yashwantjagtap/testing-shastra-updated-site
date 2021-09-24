let createError = require("http-errors");
let express = require("express");
let path = require("path");
let cookieParser = require("cookie-parser");
let logger = require("morgan");

var session = require("express-session")({
  secret: "utirna_admin",
  resave: true,
  saveUninitialized: true,
});

let indexRouter = require("./routes/");

let app = express();

var db_connect = require("./app/config/db.connect"); // connection string
var connection = db_connect.myConnection(
  db_connect.mysql,
  db_connect.dbOptions,
  "single"
);
// view engine setup
app.set("views", path.join(__dirname, "app", "views"));
app.set("view engine", "pug");
app.use(connection);
app.use(session);
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;