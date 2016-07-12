
exports.up = function(knex, Promise) {
  return knex.schema.createTable('book', function(table){
    table.increments()
    table.text('book_name')
    table.text('book_genre')
    table.text('book_description')
    table.text('cover_url')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('book')
};
