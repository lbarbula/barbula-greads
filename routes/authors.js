var express = require('express');
var router = express.Router();
var db = require('../db/connectAuthors')
var book = require('../db/connectBooks')

router.get('/', function(req, res, next){
  db.addBooksToAuthor()
  .then(function (data){
    return Promise.all(data)
  })
    .then(function(results){
      console.log(results[0].books)
      res.render('authors/list-authors',
      {
        author: results
      })
    })
})

router.get('/delete/:id', function(req, res, next){
  db.getAuthorWithBooks(req.params.id)
    .then(function(data){
      res.render('authors/delete-authors',
      {
        author: data[0],
        book: data[1]
      })
    })
})

router.get('/edit/:id', function(req, res, next){
  db.getAuthorWithBooks(req.params.id)
  .then(function(data){
    res.render('authors/edit-authors',
    {
      author: data[0],
      book: data[1]
    })
  })
})

router.get('/details/:id', function(req, res, next){
  db.getAuthorWithBooks(req.params.id)
    .then(function(data){
      res.render('authors/details-authors',
      {
        author: data[0],
        book: data[1]
      })
    })
})

router.get('/new', function(req, res, next){
  book.listBooks()
  .then(function(book){
    console.log(book)
    res.render('authors/add-authors', {book: book})
  })
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
  var author = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    biography: req.body.biography,
    portrait_url: req.body.portrait_url
  }
  var bookId = req.body.book_id
  db.addAuthor(author, bookId)
  .then(function(){
    res.redirect('/authors')
  })
})
module.exports = router;
