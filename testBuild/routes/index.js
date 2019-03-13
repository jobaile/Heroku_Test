var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', 
  message: 'Welcome to your first Express app' });
  // asks for a particular view, so this is the data that goes with it
});

module.exports = router;
