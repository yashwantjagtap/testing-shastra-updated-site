var sendData = {
  _call: 0,
  _error: [],
};
var middleware = {
  checkForPoolConnection: function (req, res, next) {
    req.getConnection(function (err, connection) {
      if (err) {
        sendData._call = 3000;
        sendData._error = "_ connection error";
        res.send(sendData);
        return false;
      } else {
        res.pool = connection;
        next();
      }
    });
  },
  checkForPoolConnectionWithSession: function (req, res, next) {
    if (typeof req.session.User == "undefined") {
      res.redirect("/login");
      return false;
    }
    req.getConnection(function (err, connection) {
      if (err) {
        sendData._call = 999;
        sendData._error = "_ connection error";
        res.send(sendData);
      } else {
        res.pool = connection;
        next();
      }
    });
  },
};

module.exports = middleware;
