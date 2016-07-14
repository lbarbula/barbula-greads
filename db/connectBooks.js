var knex = require('./knex')
var _ = require('lodash')

module.exports = {
  listBooks: function () {
    return knex('book').select()
      .join('genre', 'genre.id', 'book.genre_id')
      .select('book.id', 'book.book_name', 'book.cover_url', 'book.book_description', 'genre.name as genreName')
  },
  listBooksAuthors: function (id) {
    return knex('author')
      .join('author_book', 'author.id', 'author_id')
      .where('book_id', id)
      .select('author.id as authorId', 'author.first_name', 'author.last_name')
  },

  addAuthorsToBook: function () {
    return this.listBooks()
      .then((returnedBook) => {
        return returnedBook.map((book) => {
          return this.listBooksAuthors(book.id)
          .then(function(authors){
            book.authors = authors
            return book
          })
        })
      })
},
  getGenre: () => {
    return knex('genre')
  },
  addBook: (body, authorId) => {
    return knex('book').insert(body, 'id')
    .then(function(id){
      return knex('author_book').insert({
        author_id: authorId,
        book_id: id[0]
      })
    })
  },
  getBookWithAuthors: (id) => {
    return Promise.all([
      knex('book').where('id', id).first(),
      knex('book').where('book.id', id).first()
      .then(function(book){
        return knex('author_book').where({
          book_id: book.id
        }).pluck('author_id')
        }).then(function(ids){
        return knex('author').whereIn('id', ids)
        }).then(function(results){
        return results;
      })
    ])
  },
  removeBook: (id) => {
    return knex('author_book').del().where('book_id', id)
    .then(function(){  
      return knex('book').del().where('id', id)
    })
  },
  editBook: (id, body) => {
    return knex('book').where('book.id', id).update(body)
  },
}
