
exports.up = function(knex, Promise) {
  return knex.schema.createTable('genre', function(table){
    table.increments()
    table.text('name')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('genre')
};
