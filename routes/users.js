/** 
*   MEAN-play-boiler App
*   @author Nick Hoffman <hoffman.nick10@gmail.com>
**/

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
