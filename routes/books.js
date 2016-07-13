var express = require('express');
var router = express.Router();
var db = require('../db/connectBooks')
var author = require('../db/connectAuthors')

/* GET users listing. */
router.get('/', function(req, res, next) {
  db.addAuthorsToBook()
  .then(function(data){
    return Promise.all(data)
  })
  .then(function(results){
    console.log(results)
    // console.log(data[1][0].first_name)
    // console.log(data[1][0].id)
    res.render('books/list-books',
    {
      books: results
    });
  })
});

router.get('/delete/:id', function(req, res, next){
  db.getBookWithAuthors(req.params.id)
    .then(function(data){
      res.render('books/delete-books',
      {
        book:data[0],
        author:data[1]
      })
    })
})

router.get('/edit/:id', function(req, res, next){
  db.getBook(req.params.id)
  .then(function(book){
    res.render('books/edit-books',  {book: book})
  })
})

router.get('/details/:id', function(req, res, next){
  db.getBookWithAuthors(req.params.id)
    .then(function(data){
      res.render('books/details-books',
      {
        book: data[0],
        author: data[1]
      })
    })
})

router.get('/new', function(req,res, next){
  return Promise.all([
    db.getGenre(),
    author.listAuthors()
  ])
  .then(function (data){
    res.render('books/add-book', {genre: data[0], author:data[1]})
  })
})

router.post('/new', function(req, res, next){
  let book = {
    book_name: req.body.book_name,

  }
  let authorId = req.body.author_id
  db.addBook(book, authorId)
    .then(function(){
      console.log(req.body)
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
