var knex = require('./knex')

module.exports = {
  listAuthors: () => {
    return knex('author')
  }
}
