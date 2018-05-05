var express = require('express');
var crypto = require('crypto');
var Http=require('../util/http_util');
var async= require("async");
var mail = require('../../API/util/mail')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    Http.get("http://127.0.0.1:9000/hotinformation/", {}, (err, result) => {
        if (result == null || result.length == 0) {

        } else {
            for (var i = 0; i < result.length; i++) {
                result[i].imgsrc = result[i].imgsrc.replace("G:\\graduate\\gradu\\API\\", "http://localhost:9000/");
            }
        }
        res.render('index', {title: 'Express',hot:result});
    })
})

router.get('/user/:id/', function(req, res, next) {
    let userId=req.params.id;
    let userName;
    Http.get("http://127.0.0.1:9000/user/"+userId,{},(err, result)=>{
        userName=result[0].name;
        res.render('user', { id: userId ,username:userName});
    })

})

router.get('/reg', function(req, res, next) {
    res.render('reg', { title: 'Express' });
});

router.get('/classify/:type/', function(req, res, next) {
    let type=req.params.type;
    let goodsType = req.query.goodstype;
    var page=req.query.page;
    var lastpage,nextpage;
    Http.get("http://127.0.0.1:9000/showinformation/",{type:type,currentPage:page,goodsType:goodsType},(err, result)=>{
        console.log("==========",result)
        if(result == null || result.length== 0) {

        }else {
            for(var i=0;i<result.length;i++){
                result[i].imgsrc=result[i].imgsrc.replace("G:\\graduate\\gradu\\API\\","http://localhost:9000/");
            }
        }
        if (page == 1){
            lastpage =1
        }else {
            lastpage = parseInt(page)-1
        }
        nextpage = parseInt(page) +1
        res.render('classify', { information:result ,lastpage:lastpage,nextpage:nextpage,type:type});
    })
});


router.post('/regd', function(req, res, next) {
    var md5 = crypto.createHash('md5');   //crypto模块功能是加密并生成各种散列
    req.body.password=md5.update(req.body.password).digest('hex');
    Http.post("http://127.0.0.1:9000/reg",req.body,(err, result)=>{
        res.cookie('user',req.body.name);
        res.cookie('password',req.body.password)
        res.render('index', { title: '首页' });
    })

});

router.get('/goodsId/:id', function(req, res, next) {
    let type='demand';
    let goodsId= req.params.id;
    console.log(goodsId)
    console.log(type);
    async.parallel({
        information: (callback) => {
            Http.get("http://127.0.0.1:9000/information/" + goodsId, {}, (err, result) => {
                if (result == null || result.length == 0) {
                    callback(null,null)
                } else {
                    result[0].imgsrc = result[0].imgsrc.replace("G:\\graduate\\gradu\\API\\", "http://localhost:9000/");
                    callback(null,result[0])
                }

            })
        },
        comment1: (callback) => {
            Http.get("http://127.0.0.1:9000/comment/" + goodsId, {}, (err, result) => {
                if (result == null || result.length == 0) {
                } else {
                    if(result ){
                        result = result.comment
                    }else {
                        result = []
                    }
                }
                callback(null,result)
            })
        },
    }, function(err, results) {
        console.log(results)
        res.render('specific', { result:results});
    });
});
module.exports = router;
