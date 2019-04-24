//======================================================
// requiring app dependencies for file path
//======================================================

var path = require("path");

//======================================================
// code to establish route 
//======================================================

module.exports = function(app){

  app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname + "/../public/survey.html"));
  });

  // default home
  app.use(function (req, res) {
    res.sendFile(path.join(__dirname + "/../public/home.html"));
  });
};
