var express = require('express');
var router = express.Router();
var query = require('../db/queries');
var knex = require('../db/knex')
var pg = require('../db/knex.js')






/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Galvinize Reads' });

});

router.get('/:id/about_author', function(req, res, next){
  knex('authors').where({id:req.params.id}).first()
  .then(function(author){
    res.render('about_author', {authors: author})
  })
})


router.get('/:id/delete_auth', function(req, res, next){
  pg('authors').where({id:req.params.id}).first()
  .then(function(author){
    res.render('delete_auth', {authors: author})
  })
})

//
// router.get('/:id/delete_auth', function(req,res){
//   queries.Authors.deleteAuthor(req.params.id)
//   .then(function(){
//     res.redirect('/authors')
//   })
// })

router.post('/:id/delete_auth', function(req, res, next){
  pg('authors').where({id:req.params.id}).del()
  .then(function(author){
    res.redirect('/authors')
  })
})







router.get('/books', function(req,res,next) {
  knex('books').select()
  .then(function(books) {
    res.render('books', {books:books})
  })
})








router.get('/authors', function(req,res,next) {
  knex('authors').select()
  .then(function(authors) {
    res.render('authors', {authors:authors})
  })
})

//   router.delete('/authors/delete_auth/:id', function(req,res,next)  {
//     query.deleteAuthor(req.params.id).then(function() {
//       res.redirect('/authors')
//     })
//   })
//
router.get('/new_author', function(req, res, next) {
  res.render('new_author');
});


// router.get('/authors', function(req, res, next) {
//   knex('authors').select().then(function(authors){
//   res.render('authors', {authors: authors});
//   });
// });


router.post('/new_book', function(req, res, next) {

	query.addNewBook(req.body.author_first, req.body.author_last, req.body.biography)
	.then(function(data) {
		res.redirect('/');
	})
	.catch(function(err) {
		return next(err);
	})
})


router.post('/new_author', function(req, res, next) {

	query.addAuthor(req.body.author_first, req.body.author_last, req.body.biography)
	.then(function(data) {
		res.redirect('/');
	})
	.catch(function(err) {
		return next(err);
	})
})


module.exports = router;
