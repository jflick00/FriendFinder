//  ==============================================================
//  Load Data
//  ==============================================================

var friendsData = require("../data/friends.js");

//  ==============================================================
//  Routing
//  ==============================================================

module.exports = function(app) {
    
    //  API GET Requests
    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    })

    //  API POST Requests
    app.post("/api/friends", function(req, res) {
        function closest (num, arr) {
            var curr = arr[0];
            var diff = Math.abs (num - curr);
            for (var val = 0; val < arr.length; val++) {
                var newdiff = Math.abs (num - arr[val]);
                if (newdiff < diff) {
                    diff = newdiff;
                    curr = arr[val];
                }
            }
            return curr;
        }
        array = friends.scores;
        number = userData;
        alert (closest (number, array))
    })
}
