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
prompt.get(["What are you looking for today?", "How many?"], function (err, result) {

    // Log the results.
    console.log("Command-line input received:");
    console.log("  item: " + result.item_id);
    console.log("  quantity: " + result.quantity);
}).then(function(answer) {
    // function to pull db info
    var checkProducts = function() {
        // query the database for product availability
        connection.query("SELECT stock_quantity FROM products", function(err, results){
            if (err) throw err;

            var productQuantity = results[i];

            for (var i = 0; i < results.length; i++) {
                if (productQuantity > 0) {
                    console.log("Added to cart.");
                }
                else {
                    console.log("Sorry, we are currently out of stock. Please make another selection.");
                }
            }



        });
    }

}

// end connection
connection.end();



