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

module.exports = router;
