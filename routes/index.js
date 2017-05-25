var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');
FeedParser = require('feedparser'),
/* GET home page. */
router.get('/', function(req, res, next) {
  var spide = require('rssspider');
var url = 'https://www.matrix67.com/blog/feed';
spide.fetchRss(url).then(function(data){
		res.render('index', { title: 'Express',b:data });
});
  
});

module.exports = router;
