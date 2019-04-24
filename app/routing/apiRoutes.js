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
  app.post("/api/friends", function(req,res){
    // variables to grab and store scores to compare with friends in friends array
    var newFriendScores = req.body.scores;
    var scoresArray = [];
    var bestMatch = 0;

    // loops through all current friends in list
    for(var i=0; i<friends.length; i++){
      var scoresDiff = 0;
      //run through scores to compare friends
      for(var j=0; j<newFriendScores.length; j++){
        scoresDiff += (Math.abs(parseInt(friends[i].scores[j]) - parseInt(newFriendScores[j])));
      }

      //push results into scoresArray
      scoresArray.push(scoresDiff);
    }

    //after all friends are compared, find best match
    for(var i=0; i<scoresArray.length; i++){
      if(scoresArray[i] <= scoresArray[bestMatch]){
        bestMatch = i;
      }
    }

    //return bestMatch data
    var bff = friends[bestMatch];
    res.json(bff);

    //pushes new submission into the friendsList array
    friends.push(req.body);
  });
};