var knex = require('./knex.js');

var Authors = function() {
	return knex('authors');
}

module.exports = {
	getAllAuthors: Authors,
	addAuthor: function(first_name, last_name, biography) {
		return Authors().insert({
			first_name: first_name,
			last_name: last_name,
      biography: biography,
		})
	},
// 	findAuthorByName: function(first_name,last_name){
// 		return Authors().where({
//       'first_name':first_name,
//       'last_name':last_name})
// }
}
