// DEPENDENCIES //

var path = require('path');

// ROUTING //

module.exports = function(app){

  app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname + 'friend-finder/app/public/survey.html'));
  });

  app.use(function (req, res) {
    res.sendFile(path.join(__dirname + 'friend-finder/app/public/home.html'));
  });
};

