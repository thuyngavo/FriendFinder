//======================================================
// requiring app dependencies for file path
//======================================================

var path = require("path");

//======================================================
// code to establish route 
//======================================================

module.exports = function(app){
    // home
    app.get("/",function (req, res) {
      res.sendFile(path.join(__dirname + "/../public/home.html"));
    });

    //survey
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/survey.html"));
    });
};
