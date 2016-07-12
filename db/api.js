var knex = require('./knex')

module.exports = {
  listBooks: () => {
    return knex('book')
  }
}
