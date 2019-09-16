var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/*GET users/cool */
router.get('/cool', function(req, res, next) {
  res.send('Your so cool');
});

/*GET users/cool/stupid */ 
router.get('/stupid', function(req, res, next) {
  res.send('Your also stupid');
});

module.exports = router;
