var express = require('express');
var router = express.Router();
var db = require('../db/connectAuthors')

router.get('/', function(req, res, next){
  db.listAuthors()
    .then(function(author){
      res.render('authors/list-authors', {author: author})
    })
})

router.get('/new', function(req, res, next){
  res.render('authors/add-authors')
})
router.post('/new', function(req, res, next){
  db.addAuthor(req.body)
  .then(function(){
    res.redirect('/authors')
  })
})
module.exports = router;
