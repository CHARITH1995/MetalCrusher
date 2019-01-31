var express = require('express');
var router = express.Router();
const excavators = require('../controllers/excavators');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/Exc',excavators.addexcavators);


module.exports = router;
