
exports.up = function(knex, Promise) {
  return knex.schema.createTable('author_books', (table) => {
    table.increments()
    table.integer('author_id').references('authors.books_id')
    table.integer('book_id').references('books.id')
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('author_books')

};
