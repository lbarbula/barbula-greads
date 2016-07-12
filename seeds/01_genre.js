
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE genre RESTART IDENTITY CASCADE')
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('genre').insert({name: 'Python'}),
        knex('genre').insert({name: 'JavaScript'})
      ]);
    });
};
