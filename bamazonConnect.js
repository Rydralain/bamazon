// This module will return a mysql object that is connected to the bamazon db

const mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'bamazon'
  });
   
  connection.connect();

  module.exports = connection;