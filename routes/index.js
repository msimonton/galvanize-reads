var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/new_author', function(req, res, next) {
  res.render('new_author');
});


module.exports = router;
