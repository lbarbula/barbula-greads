var express = require('express');
var router = express.Router();
var db = require('../db/connectAuthors')

router.get('/', function(req, res, next){
  db.listAuthors()
    .then(function(author){
      res.render('authors/list-authors', {author: author})
    })
})

module.exports = router;
