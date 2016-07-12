var knex = require('./knex')

module.exports = {
  listAuthors: () => {
    return knex('author')
  },
  addAuthor: (body) => {
    return knex('author').insert(body)
  },
}
