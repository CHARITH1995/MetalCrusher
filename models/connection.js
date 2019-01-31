var mysql = require('mysql');

var con = mysql.createConnection({
  host: "sql9.freemysqlhosting.net",
  user: "sql9267398",
  password:"L34DjpGbQP",
  database: "sql9267398"
});

module.exports = con;