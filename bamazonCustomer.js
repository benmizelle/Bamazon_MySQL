// require Bamazon db
var mysql = require("mysql");

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

// Asks the user what product they are interested in and how many the quantity
prompt.get(["What are you looking for today?"], function (err, result) {
    // Log the results.
    console.log("Command-line input received:");
}).then(function(answer) {
    // function to pull db info for product_id
    var productNumber = function() {
        // query the database for the item id
        connection.query("SELECT item_id FROM products", function (err, results) {
            if (err) throw err;

            var productNumber = results[i];

            for (var i = 0; i < results.length; i++) {
                if () {
                    console.log("");
                }
                else {
                    console.log("");
                }
            }
        });

prompt.start();

// asks for a quantity to check against stock_quantity
prompt.get(["how many?"]), function (err, results) {
            var checkProducts = function () {
                // query the database for product availability
                connection.query("SELECT stock_quantity FROM products", function (err, results) {
                    if (err) throw err;

                    var productQuantity = results[i];
                    // Checks results against stock_quantity to make sure there is more than 0 in stock
                    for (var i = 0; i < results.length; i++) {
                        if (productQuantity > 0) {
                            // message if item is in stock
                            console.log("Added to cart.");
                        }
                        else {
                            // message if item is out of stock
                            console.log("Sorry, we are currently out of stock. Please make another selection.");
                        }
                    }


                });
                // updates database, subtracts 1
                connection.query("UPDATE products WHERE ?", [{
                    stock_quantity: i--
                }])
            }

        }