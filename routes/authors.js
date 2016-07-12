var express = require('express');
var router = express.Router();
var db = require('../db/connectAuthors')

router.get('/', function(req, res, next){
  db.listAuthors()
    .then(function(author){
      res.render('authors/list-authors', {author: author})
    })
})

router.get('/delete/:id', function(req, res, next){
  db.getAuthor(req.params.id)
    .then(function(author){
      console.log(author)
      res.render('authors/delete-authors', {author:author})
    })
})

router.get('/edit/:id', function(req, res, next){
  db.getAuthor(req.params.id)
  .then(function(author){
    res.render('authors/edit-authors',  {author: author})
  })
})

router.get('/new', function(req, res, next){
  res.render('authors/add-authors')
})

router.delete('/:id', function(req,res,next){
  db.removeAuthor(req.params.id)
  .then(function(){
    res.redirect('/authors')
  })
})

router.put('/:id', function(req, res, next){
  db.editAuthor(req.params.id, req.body)
    .then(function(){
      res.redirect('/authors')
    })
})

router.post('/new', function(req, res, next){
  db.addAuthor(req.body)
  .then(function(){
    res.redirect('/authors')
  })
})
module.exports = router;
