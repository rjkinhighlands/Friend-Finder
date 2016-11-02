// POST ROUTES / LOAD DATA //

var friendList = require('friend-finder/data/friend.js');

module.exports = function(app){

  app.get('/api/friends', function(req,res){
    res.json(friendList);
  });

  app.post('/api/friends', function(req,res){

  	var newFriend = req.body.scores;
  	var scoresList = [];
  	var friendCount = 0;
  	var topMatch = 0;

// CHECK LIST //

	for(var l=0; l<friendList.length; l++) {
		var scoresDiffer = 0;
	for(var p=0; p<newFriend.length; p++){
		scoresDiffer += (Math.abs(parseInt(friendList[l].scores[p]) - parseInt(newFriend[p])));
	}

	scoresList.push(scoresDiffer);
	}

	for(var l=0; l<scoresList.length; l++){
		if(scoresList[l] <= scoresList[topMatch]){
		topMatch = l;
	}
}

// MATCH DATA  Best Album Friend //

var baf = friendList[topMatch];
res.json(baf);

// FRIENDS LIST ARRAY //

    friendList.push(req.body);
  });
};