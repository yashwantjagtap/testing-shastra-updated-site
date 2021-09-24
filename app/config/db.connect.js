var mysql = require("mysql2"); // node-mysql2 module
var myConnection = require("express-myconnection"), // express-myconnection module
    dbOptions = {
    host: "localhost",
    user: "rxgvbcbw_testing_shastra",
    password: "Omsairam@800",
    port: 3306,
    database: "rxgvbcbw_testing_shastra",
  };

exports.myConnection = myConnection;
exports.dbOptions = dbOptions;
exports.mysql = mysql;