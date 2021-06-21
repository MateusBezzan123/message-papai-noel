var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/carta', function(req, res, next) {
  res.render('index', { title: 'Carta' });
});

router.post('/carta/new', function(req, res, next) {
  res.render('index', { title: 'Carta New' });
});

router.put('/carta/edit', function(req, res, next) {
  res.render('index', { title: 'Carta Edit' });
});

router.delete('/carta', function(req, res, next) {
  res.render('index', { title: 'Carta' });
});



module.exports = router;
