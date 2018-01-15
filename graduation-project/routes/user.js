var express = require('express');
var router = express.Router();
var Http=require('../util/http_util');
var request=require('request');

/* GET users listing. */
router.get('/:id/', function(req, res, next) {
    let userId=req.params.id;
    let userName;
    Http.get("http://127.0.0.1:9000/user/"+userId,{},(err, result)=>{
        userName=result[0].name;
        res.render('user', { id: userId ,username:userName});
    })

});

router.get('/:id/insert', function(req, res, next) {
    let userId=req.params.id;
    let userName;
    Http.get("http://127.0.0.1:9000/user/"+userId,{},(err, result)=>{
        userName=result[0].name;
        res.render('insert', { id: userId ,username:userName});
    })
});

module.exports = router;
