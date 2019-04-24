//======================================================
//requiring app dependencies:
//======================================================

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//======================================================
// create express server and identify port 
//======================================================

var app = express();
var PORT = process.env.PORT || 8080;

//======================================================
// set up middleware for the app to handle data parsing
//======================================================

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//======================================================
// establish routes for app to navigate through requested data
//======================================================

require("./app/routing/apiRoutes.js")(app); 
require("./app/routing/htmlRoutes.js")(app);

//======================================================
// set up listener to start the server
//======================================================

app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});