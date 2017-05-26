var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');
var FeedParser = require('feedparser');
/* GET home page. */
const low = require('lowdb')
var db = low('./config/db.json');
db.defaults({ urls: [] }).write()
router.get('/', function(req, res, next) {
  var spide = require('rssspider');
  var url = 'https://www.matrix67.com/blog/feed';
   
  var num = db.get('urls').find({ name: url }).size().value()
  if(num == 0){
    db.get('urls').push({ name: url }).write()
  }
  spide.fetchRss(url).then(function(data){
        res.render('index', { title: 'Rss',b:data });
    });
  
  
});

module.exports = router;
