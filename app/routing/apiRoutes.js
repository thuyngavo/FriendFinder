//======================================================
// requiring app dependencies 
// import data from friends.js
//======================================================

var path = require ("path");
var friends = require("../data/friends.js");

//======================================================
// exporting api route
//======================================================

module.exports = function(app){

    // GET : display JSON of all possible friends
    app.get("/api/friends", function(req,res){
        res.json(friends);
    });

    // POST : adds new friend entry
    app.post("/api/friends", function (req, res) {
           
        
            
        // variables to hold user input
        var userInput = req.body;
        var userResponses = userInput.scores;
        var matchName = "";
        var matchPhoto = "";
        var totalDifference = 1000; 
    
        // loop through array in friends.js
        for (var i = 0; i < friends.length; i++) {
    
            // loop though each question and look for differences
            var diff = 0;
            for (var I = 0; I < userResponses.length; I++) {
                diff += Math.abs(friends[i].scores[I] - userResponses[I]);
            }
    
                // match with the lowest difference 
            if (diff < totalDifference) {    
                totalDifference = diff;
                matchName = friends[i].name;
                matchPhoto = friends[i].photo;
            }
        }

            // push user data to the friends.js
        friends.push(userData);

        res.json(matchName + matchPhoto);
        
    });
};