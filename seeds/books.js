
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('books').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('books').insert({book_name:'Python In A Nutshell', book_genre:'Python', book_description:'This '}),
        knex('books').insert({book_name:'Think Python', book_genre:'Python', book_description:'If you want to learn how to program, working with Python is an excellent way to start. This hands-on guide takes you through the language a step at a time, beginning with basic programming concepts before moving on to functions, recursion, data structures, and object-oriented design. This second edition and its supporting code have been updated for Python 3.'}),
        // knex('books').insert({Book Name: Book Genre: Book Description:})
        // knex('books').insert({Book Name: Book Genre: Book Description:})
        // knex('books').insert({Book Name: Book Genre: Book Description:})
        // knex('books').insert({Book Name: Book Genre: Book Description:})
      ]);
    });
};
