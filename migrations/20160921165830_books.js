
exports.up = function(knex, Promise) {
  return knex.schema.createTable('books', (table) => {
    table.increments('id')
    table.string('book_name')
    table.string('book_genre')
    table.text('book_description', 800)


  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('books')

};
