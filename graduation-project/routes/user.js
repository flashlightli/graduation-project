var express = require('express');
var router = express.Router();
var Http=require('../util/http_util');
var request=require('request');

/* GET users listing. */
router.get('/user/:id/', function(req, res, next) {
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

router.get('/:id/manager', function(req, res, next) {
    let userId=req.params.id;
    let userName;
    Http.get("http://127.0.0.1:9000/user/"+userId,{},(err, result)=>{
        userName=result[0].name;
        Http.get("http://127.0.0.1:9000/userinformation/"+userName,{},(err, result)=>{
            console.log("=========!!!!",result)
            res.render('manager', { id: userId ,username:userName, information:result});
        })

    })
});

router.get('/:id/remind', function(req, res, next) {
    let userId=req.params.id;
    let userName;
    Http.get("http://127.0.0.1:9000/user/"+userId,{},(err, result)=>{
        userName=result[0].name;
        Http.post("http://127.0.0.1:9000/remind",{username:userName},(err, result)=>{
            res.render('remind', { id: userId ,username:userName, information:result});
        })

    })
});



module.exports = router;
