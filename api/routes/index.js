var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('<a href="/phones">Check out our phones!</a>')
});

module.exports = router;
