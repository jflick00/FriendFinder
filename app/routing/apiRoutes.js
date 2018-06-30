//  ==============================================================
//  Load Data
//  ==============================================================

var friends = require("../data/friends");

//  ==============================================================
//  Routing
//  ==============================================================

module.exports = function(app) {
    
  //  Route to display JSON of all possible friends
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  })

  //  Add new friend entry
	app.post("/api/friends", function(req, res) {
		var bestMatch = {
      name: "",
      photo: "",
      difference: Infinity
    };

    // Parse user results
    var userData = req.body;
    var userScores = userData.scores;

    // Variable to calculate difference between scores
    var totalDifference;

    // For-loop of all friends
    for (var i = 0; i < friends.length; i++) {
      var currentFriend = friends[i];
      totalDifference = 0;

      // For-loop of all friends' scores
      for (var j = 0; j < currentFriend.scores.length; j++) {
        var currentFriendScore = currentFriend.scores[j];
        var currentUserScore = userScores[j];

        // Calculate the difference between the scores and sum them into the totalDifference
        totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
      }

      // If the sum of differences is less then the differences of the current "best match"
      if (totalDifference <= bestMatch.difference) {
        // Reset the bestMatch to be the new friend
        bestMatch.name = currentFriend.name;
        bestMatch.photo = currentFriend.photo;
        bestMatch.difference = totalDifference;
      }
    }

    // Save user data to friends object
    friends.push(userData);

    // Return a JSON with the user's bestMatch
    res.json(bestMatch);
  });
      
}
