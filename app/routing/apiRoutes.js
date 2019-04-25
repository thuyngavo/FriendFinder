//=========================================================================
// requiring app dependencies 
// import data from friends.js
//=========================================================================

var friends = require("../data/friends.js");

//=========================================================================
// exporting api route
//=========================================================================

module.exports = function(app) {

  // GET : display JSON of all possible friends
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    // POST : adds new friend entry to friends array
    app.post("/api/friends", function(req,res) {
        // variables to hold user input
        var userInput = req.body;  
        var userResponses = userInput.scores;
        // var userName=userInput.name;
        // var userPhoto=userInput.photo;

        // variable to hold best match    
        var matchName = "";
        var matchPhoto = "";
        var maxScore = 100;

        // for each person in friendsArray
        for (var i=0; i<friends.length; i++) {
            var difference = 0;
        // for each question on survey
            for (var j=0; j<userResponses.length; j++) {
                var friendScore = friends[i].score[j];
                var userScore = userResponses[j];
                difference += Math.abs(friendScore - userScore);
            };

            // setting match
            if (difference < maxScore) {
            maxScore = difference;
            matchName = friends[i].name;
            matchPhoto = friends[i].photo;
            };
        };

    // push userInput to friendsArray
    friends.push(userInput);

    res.json({status: "OK", matchName: matchName, matchPhoto: matchPhoto});

  });
}; 