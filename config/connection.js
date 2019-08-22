// Require dependencies
const mysql = require("mysql");

// Create the 'connection' object to send to mysql
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "virtual_restaurant_db"
});

// Connect with mysql using the created 'connection' object 
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection
module.exports = connection;