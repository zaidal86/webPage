var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Remy le con', message: 'REMY JE TE DETESTE'});
});

module.exports = router;
