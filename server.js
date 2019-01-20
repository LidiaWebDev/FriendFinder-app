// Dependencies
var express = require("express");

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/app/public"));

// Requires and sets the HTML routes in this file
require("./app/routing/htmlRoutes.js")(app);

// Requires and sets the API routes in this file
require("./app/routing/apiRoutes.js")(app);

// Starts the server to begin listening
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
