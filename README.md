Link to Website [Barbula-Galvanize Reads](https://quiet-island-59677.herokuapp.com/) 

# Galvanize Reads

Galvanize Reads is a book catalog service that stores a list of recommended technology books. You are building a web app for them. It should allow you to:

List books and authors
Add books and authors
Modify books and authors
Remove books and authors
There are some additional features, such as search, that are nice-to-haves, but a lower priority than the core features. The folks at Galvanize Reads have provided you some sample data from their existing registry that you can use for development.

##Installation

* Fork and clone repository into clean directory.
* `npm install`
* Set up a postgres database
* create .env file, use `.env-example` as a guideline
* create .gitignore file, echo .env into .gitignore
* npm install -g knex pg
* `knex migrate:latest`
* `knex seed:run`
* `npm run dev-start`
