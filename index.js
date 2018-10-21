var express = require('express');
var router = express.Router();
var Twitter = require('twitter');

/* GET users listing. */
router.get('/', function(req, res, next) {
 var client = new Twitter({
   consumer_key: '9KOQ5LCILKKOpjEXldx9ZlOQa',
   consumer_secret: 'r1BuGw5W8absPR9nJNo2qa4wj0CCGvGL4TE9PGgiRorrotLX1Z',
   access_token_key: '1053650705804861440-bW3b3jPfYPoTqAage5z2goaslfnXrl',
   access_token_secret: '3aQZFUnfMSazhgzfVpjJRkd9ee9XAycwf7p932lGSy3IC'
 });
// screen_name = 'TeamFireHack'
 var params = {q: 'pbchack2018'};
 var url = 'search/tweets';

 client.get(url, params, function(error, tweets, response) {
   if (!error) {
     res.json(tweets);
   }
 });

 //res.send('respond with a resource');
});

module.exports = router;