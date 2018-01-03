var express = require('express');
var crypto = require('crypto');
var Http=require('../util/http_util');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/real', function(req, res, next) {
        res.render('classify');
});
router.get('/virtual', function(req, res, next) {
    res.render('classify');
});
router.post('/login',function (req, res, next) {
    var md5 = crypto.createHash('md5');   //crypto模块功能是加密并生成各种散列
    var newpd = md5.update(req.body.password).digest('hex');
    console.log(newpd);
});
router.get('/reg', function(req, res, next) {
    console.log(req.body);
    res.render('reg', { title: 'Express' });
});
router.post('/regd', function(req, res, next) {
    console.log(req.body);
    Http.post("http://127.0.0.1:9000/user",req.body,data=>{
        console.log(data);
        res.render('index', { title: 'Express' });
    })

});
module.exports = router;
