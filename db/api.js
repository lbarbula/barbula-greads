var knex = require('./knex')

module.exports = {
  listBooks: () => {
    return knex('book')
      .join('genre', 'genre.id', 'book.genre_id')
        .select('book_name as bookName', 'book.book_description', 'book.cover_url', 'genre.name as genreName')
  },
  getGenre: () => {
    return knex('genre')
  },
  addBook: (body) => {
    return knex('book').insert(body)
  }
}
