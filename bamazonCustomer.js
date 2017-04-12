// require Bamazon db
var mysql      = require("mysql");

var prompt = require("prompt");

// connects to the Bamazon db
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "newcastle22",
    database: "Bamazon"
});
// begin connection
connection.connect();

prompt.start();

// Get two properties from the user: username and email
prompt.get(["What aare you lookig for?", "How many?"], function (err, result) {

    // Log the results.
    console.log("Command-line input received:");
    console.log("  item: " + result.item_id);
    console.log("  quantity: " + result.quantity);
});

// Queries and such here

// end connection
connection.end();



