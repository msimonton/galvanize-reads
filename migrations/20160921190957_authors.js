
exports.up = function(knex, Promise) {
  return knex.schema.createTable('authors', (table) => {
    table.increments()
    table.string('first_name')
    table.string('last_name')
    table.text('biography')
    table.string('portrait_url')
    table.integer('books_id')
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('authors')

};
