

exports.up = function(knex, Promise) {
  return knex.schema.createTable('book', function(table){
    table.increments()
    table.text('book_name')
    table.integer('genre_id').references('id').inTable('genre').onDelete('CASCADE')
    table.text('book_description')
    table.text('cover_url')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('book')
};
