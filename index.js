var express = require('express');
var router = express.Router();
var Twitter = require('twitter');

/* GET users listing. */
router.get('/', function(req, res, next) {
 var client = new Twitter({
   consumer_key: '',
   access_token_key: '',
   access_token_secret: ''
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