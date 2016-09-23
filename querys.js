var knex = require('./db/knex.js');

var Authors = function() {
	return knex('authors');
}

module.exports = {
	getAllAuthors: Authors,
	addAuthor: function(first_name, last_name, biography) {
		return Authors().insert({
			firstname: firstname,
			last_name: last_name,
      biography: biography,
		})
	},
	allAuthors: function(){
		return Authors()
}
}
