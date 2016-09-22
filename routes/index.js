var express = require('express');
var router = express.Router();
var query = require('../querys');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Galvinize Reads' });
});
router.get('/new_author', function(req, res, next) {
  res.render('new_author');
});


router.get('/authors',  function(req,res,next)  {
  query.getAllAuthors()
  .then(function(data)  {
    res.send(data);
  })
  .catch(function(err)  {
    return next(err)
  })
})
router.get('/authors',  function(req,res,next)  {
  res.render('authors');
})


router.get('/books',  function(req,res,next)  {
  res.render('books');
})

query.getAllAuthors()





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
