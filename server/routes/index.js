var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Digital Wave' });
});

router.get('/cam', function(req, res, next) {
  res.render('cam', { title: 'Camera View' });
});

router.get("/login", function(req, res, next) {
  var needs_camera = req.param('hascamera');
  /* if(needs_camera != "false") {
    res.redirect('/cam');
  } else { */
    res.redirect('/color');
  //}
});

module.exports = router;
