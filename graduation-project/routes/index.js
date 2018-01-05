var express = require('express');
var crypto = require('crypto');
var Http=require('../util/http_util');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',username:"" });
});
router.get('/real', function(req, res, next) {
    res.render('classify');
});
router.get('/virtual', function(req, res, next) {
    res.render('classify');
});

router.get('/reg', function(req, res, next) {
    console.log(req.body);
    res.render('reg', { title: 'Express' });
});
router.post('/regd', function(req, res, next) {
    var md5 = crypto.createHash('md5');   //crypto模块功能是加密并生成各种散列
    req.body.password=md5.update(req.body.password).digest('hex');
    Http.post("http://127.0.0.1:9000/reg",req.body,(err, result)=>{
        console.log(result);
        res.render('index', { title: 'Express' });
    })

});
module.exports = router;
