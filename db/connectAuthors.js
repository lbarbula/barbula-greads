var knex = require('./knex')
var _ = require('lodash')

module.exports = {
  listAuthors: function () {
    return knex('author').select()

  },
  listBooksAuthors: function (id) {
    return knex('book')
      .join('author_book', 'book.id', 'book_id')
      .where('author_id', id)
      .select('book.id as bookId', 'book.book_name')
  },

  addBooksToAuthor: function () {
    return this.listAuthors()
      .then((returnedAuthor) => {
        return returnedAuthor.map((author) => {
          return this.listBooksAuthors(author.id)
          .then(function(books){
            author.books = books
            return author
          })
        })
      })

},
  addAuthor: function (body, bookId) {
    return knex('author').insert(body, 'id')
    .then(function(id){
      return knex('author_book').insert({
        author_id: id[0],
        book_id: bookId
      })
    })
  },
  getAuthorWithBooks: (id) => {
    return Promise.all([
      knex('author').where('id', id).first(),
      knex('author').where('author.id', id).first()
      .then(function(author){
        return knex('author_book').where({
          author_id: author.id
        }).pluck('book_id')
      }).then(function(ids){
        return knex('book').whereIn('id', ids)
      }).then(function(results){
        return results;
      })
    ])
  },
  removeAuthor: (id) => {
    return knex('author_book').del().where('author_id', id)
    .then(function(){
      return knex('author').del().where('id', id)
    })
  },
  editAuthor: (id, body) => {
    return knex('author').where('author.id', id).update(body)
  }
}
