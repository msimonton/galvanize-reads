
exports.up = function(knex, Promise) {
  return knex.schema.createTable('books', (table) => {
    table.increments('id')
    table.string('Book Name')
    table.string('Book Genre')
    table.string('Book Description')


  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('books')

};
