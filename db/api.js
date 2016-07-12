var knex = require('./knex')

module.exports = {
  listBooks: () => {
    return knex('book')
  },
  getGenre: () => {
    return knex('genre')
  },
  addBook: (body) => {
    return knex('book').insert(body)
  }
}
