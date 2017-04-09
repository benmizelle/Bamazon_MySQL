// require Bamazon db
var mysql      = require('mysql');
// connects to the Bamazon db
var connection = mysql.createConnection({
    host     : "localhost",
    user     : "root",
    password : "newcastle22",
    database : "Bamazon"
});
// begin connection
connection.connect();

// Queries and such here

// end connection
connection.end();

var prompt = require('prompt');

prompt.start();
// Get two properties from the user: username and email
prompt.get(['username', 'email'], function (err, result) {

    // Log the results.

    console.log('Command-line input received:');
    console.log('  username: ' + result.username);
    console.log('  email: ' + result.email);
});