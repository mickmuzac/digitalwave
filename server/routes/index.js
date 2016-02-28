var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Digital Wave' });
});

router.get('/cam', function(req, res, next) {
  res.render('cam', { title: 'Express mann' });
});

module.exports = router;
