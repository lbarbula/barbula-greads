
exports.up = function(knex, Promise) {
  return knex.schema.createTable('author_book', function(table){
    table.integer('author_id').references('id').inTable('author')
    table.integer('book_id').references('id').inTable('book')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('author_book')
};
