
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('author_books').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('author_books')
          .insert({book_id:1 , books_id:1}),
        knex('author_books')
          .insert({book_id:1 , books_id:2}),
        knex('author_books')
          .insert({book_id:1 , books_id:3}),
        knex('author_books')
          .insert({book_id:2 , books_id:4}),
        knex('author_books')
          .insert({book_id:3 , books_id:5}),
        knex('author_books')
          .insert({book_id:4 , books_id:6}),
        knex('author_books')
          .insert({book_id:5 , books_id:6}),
        knex('author_books')
          .insert({book_id:6 , books_id:6})
      ]);
    });
};
