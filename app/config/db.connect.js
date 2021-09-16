var mysql = require("mysql2"); // node-mysql2 module
var myConnection = require("express-myconnection"), // express-myconnection module
  dbOptions = {
    host: "localhost",
    user: "root",
    password: "",
    port: 3306,
    database: "testing_shastra",
  };

exports.myConnection = myConnection;
exports.dbOptions = dbOptions;
exports.mysql = mysql;
