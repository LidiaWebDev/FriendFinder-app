// Dependencies
var friends = require("../data/friends.js");
console.log(friends);

// Export the function
module.exports = function(app) {
  // Set the post for the api/friends route
  app.post("/api/friends", function(req, res) {
    friends.push(req.body);
    // Set variables only needed for the post
    var difference = 0;
    var matchedFriend = friends[0];

    var lowest = 100;
    // Loop Through Friends to Find Match
    for (var i = 0; i < friends.length; i++) {
      difference = 0;
      // loops through questions- scores
      for (var a = 0; a < 10; a++) {
        // Get the difference for the two at the current question
        let diff = Math.abs(req.body.scores[a] - friends[i].scores[a]);
        difference += diff;
      }
      if (difference < lowest) {
        matchedFriend = friends[i];
        lowest = difference;
      }
    }
    // best match return
    res.json(matchedFriend);
  });
};
