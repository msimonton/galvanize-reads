var knex = require('./knex.js');


module.exports = {
// var Authors = function() {
// 	return knex('authors');
// },

Authors:{
  getAllAuthors: function(){
    return knex('authors')
  }},

  addNewBook: function(book) {
    return knex('authors').insert(book);
  },


addNewAuthor: function(author) {
  return knex('authors').insert(author);
},

deleteAuthor: function(authId){
  return knex('authors')
  .where({id: authId}).del()
},


}









// module.exports = {
// 	getAllAuthors: Authors,
// 	addAuthor: function(first_name, last_name, biography) {
// 		return Authors().insert({
// 			firstname: firstname,
// 			last_name: last_name,
//       biography: biography,
// 		})
// 	},
// 	allAuthors: function(){
// 		return Authors()
// }
// }
