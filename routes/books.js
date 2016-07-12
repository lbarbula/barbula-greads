var express = require('express');
var router = express.Router();
var db = require('../db/api')

/* GET users listing. */
router.get('/', function(req, res, next) {
  db.listBooks()
  .then(function(books){
    res.render('list-books', {books: books});

  })
});

router.get('/delete/:id', function(req, res, next){
  db.getBook(req.params.id)
    .then(function(book){
      console.log(book)
      res.render('delete-books', {book:book})
    })
})

router.get('/edit/:id', function(req, res, next){
  db.getBook(req.params.id)
  .then(function(book){
    res.render('edit-books',  {book: book})
  })
})
router.get('/new', function(req,res, next){
  db.getGenre()
  .then(function (genre){
    res.render('add-book', {genre: genre})
  })
})

router.post('/new', function(req, res, next){
  db.addBook(req.body)
    .then(function(){
      res.redirect('/books')
    })
})

router.delete('/:id', function(req,res,next){
  db.removeBook(req.params.id)
  .then(function(){
    res.redirect('/books')
  })
})

router.put('/:id', function(req, res, next){
  db.editBook(req.params.id, req.body)
    .then(function(){
      res.redirect('/books')
    })
})
module.exports = router;
