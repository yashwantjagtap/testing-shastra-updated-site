var mysql = require("mysql2"); // node-mysql2 module
var myConnection = require("express-myconnection"), // express-myconnection module
  dbOptions = {
    host: "localhost",
<<<<<<< HEAD
    user: "rxgvbcbw_testing_shastra",
    password: "Omsairam@800",
=======
    user: "root",
    password: "1234",
>>>>>>> ac07560c4b6e370819932b0028a8e298f84659e3
    port: 3306,
    database: "rxgvbcbw_testing_shastra",
  };

exports.myConnection = myConnection;
exports.dbOptions = dbOptions;
exports.mysql = mysql;