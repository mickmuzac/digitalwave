var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  //res.render('colors', { title: 'Express mann' });
});

router.get("/:id", function(req, res, next) {
  // Get the color based on the ID for the user.
  res.json({"color": "green"});
})

module.exports = router;
