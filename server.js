//======================================================
//requiring app dependencies:
//======================================================

var express = require("express");
//var bodyParser = require("body-parser");
var path = require("path");

//======================================================
// create express server and identify port 
//======================================================

var app = express();
var PORT = process.env.PORT || 8080;

//======================================================
// set up middleware for the app to handle data parsing
//======================================================

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//======================================================
// establish routes for app to navigate through requested data
//======================================================

require(path.join(__dirname, "./app/routing/apiRoutes.js"))(app); 
require(path.join(__dirname, "./app/routing/htmlRoutes.js"))(app);

//======================================================
// set up listener to start the server
//======================================================

app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});