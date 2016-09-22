
exports.up = function(knex, Promise) {
  return knex.schema.createTable('authors', (table) => {
    table.increments('id')
    table.string('First Name')
    table.string('Last Name')
    table.string('Biography')
  })

};

exports.down = function(knex, Promise) {

};
