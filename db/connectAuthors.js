var knex = require('./knex')

module.exports = {
  listAuthors: () => {
    return knex('author')
  },
  addAuthor: (body) => {
    return knex('author').insert(body)
  },
  getAuthor: (id) => {
    return knex('author').where('id', id).first()
  },
  removeAuthor: (id) => {
    return knex('author').del().where('id', id)
  },
  editAuthor: (id, body) => {
    return knex('author').where('author.id', id).update(body)
  }
}
