
exports.up = function(knex, Promise) {
  return knex.schema.createTable('books', (table) =>{
    table.increments()
    table.string('book_name')
    table.string('book_genre')
    table.text('book_description')
    table.string('cover_url')


  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('books')

};
