var express = require("express");
var bodyParser = require("body-parser");
let pathy = require("path");

var app = express();

let APIRoutes = require("./routing/apiRoutes")(app);
let HTMRoutes = require("./routing/htmlRoutes")(app);
let friendsJS = require("./app/data/friends.js")(app);

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(PORT, function()
{
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});