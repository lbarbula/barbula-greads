var find = require('../helper')
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex.raw('TRUNCATE author_book RESTART IDENTITY CASCADE')
        .then(function() {
            return knex('author').select()
        })
        .then(function(author) {
            return knex('book').select()
                .then(function(book) {
                    return Promise.all([
                        // Inserts seed entries
                        knex('author_book').insert({
                          author_id: find.findAuthor('Alex', author),
                          book_id: find.findBook('Python In A Nutshell', book)
                        }),
                        knex('author_book').insert({
                          author_id: find.findAuthor('Anna', author),
                          book_id: find.findBook('Python In A Nutshell', book)
                        }),
                        knex('author_book').insert({
                          author_id: find.findAuthor('Steve', author),
                          book_id: find.findBook('Python In A Nutshell', book)
                        }),
                        knex('author_book').insert({
                          author_id: find.findAuthor('Allen B.', author),
                          book_id: find.findBook('Think Python', book)
                        }),
                        knex('author_book').insert({
                          author_id: find.findAuthor('Bonnie', author),
                          book_id: find.findBook('Learning React Native', book)
                        }),
                        knex('author_book').insert({
                          author_id: find.findAuthor('Kyle', author),
                          book_id: find.findBook('You Don\'t Know JS: ES6 & Beyond', book)
                        }),
                        knex('author_book').insert({
                          author_id: find.findAuthor('Kyle', author),
                          book_id: find.findBook('You Don\'t Know JS: Scope & Closures', book)
                        }),
                        knex('author_book').insert({
                          author_id: find.findAuthor('Kyle', author),
                          book_id: find.findBook('You Don\'t Know JS: Async & Performance', book)
                        })
                    ]);

                })
        })
};
