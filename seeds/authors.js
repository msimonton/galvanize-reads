
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('authors').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('authors').insert({first_name:'1', last_name:'2', biography:'3', book_id:2}),
        knex('authors').insert({first_name:'1', last_name:'2', biography:'3', book_id:2}),
        knex('authors').insert({first_name:'1', last_name:'2', biography:'3', book_id:2})
      ]);
    });
};
