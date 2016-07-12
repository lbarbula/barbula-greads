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

module.exports = router;
