var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/:classify', function(req, res, next) {
    console.log(req.params.classify);
    if(req.params.classify=="real"){
        res.render('classify');
    }else {
        res.render('classify');
    }
});
module.exports = router;
