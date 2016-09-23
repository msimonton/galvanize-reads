
exports.up = function(knex, Promise) {
  return knex.schema.createTable('authors', (table) => {
    table.increments('id')
    table.string('first_name')
    table.string('last_name')
    table.string('biography')
    table.string('portrait_url')
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('authors')

};
