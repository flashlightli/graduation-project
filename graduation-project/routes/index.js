var express = require('express');
var crypto = require('crypto');
var Http=require('../util/http_util');
var async= require("async");
var mail = require('../../API/util/mail')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',username:"" });
});

router.get('/reg', function(req, res, next) {
    console.log(req.body);
    res.render('reg', { title: 'Express' });
});
router.get('/:type', function(req, res, next) {
    let type='demand';
    console.log(type);
    Http.get("http://127.0.0.1:9000/showinformation/",{type:type},(err, result)=>{
        if(result == null || result.length== 0) {

        }else {
            result[0].imgsrc=result[0].imgsrc.replace('G:\\graduate\\graduation-project\\API\\',"http://localhost:9000/");
        }
        res.render('classify', { information:result  });
    })
});


router.post('/regd', function(req, res, next) {
    var md5 = crypto.createHash('md5');   //crypto模块功能是加密并生成各种散列
    req.body.password=md5.update(req.body.password).digest('hex');
    Http.post("http://127.0.0.1:9000/reg",req.body,(err, result)=>{
        console.log(result);
        res.render('index', { title: 'Express' });
    })

});

router.get('/:type/:id', function(req, res, next) {
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
                    result[0].imgsrc = result[0].imgsrc.replace('G:\\graduate\\graduation-project\\API\\', "http://localhost:9000/");
                    callback(null,result[0])
                }

            })
        },
        comment: (callback) => {
            Http.get("http://127.0.0.1:9000/information/" + goodsId, {}, (err, result) => {
                if (result == null || result.length == 0) {
                } else {
                    result[0].imgsrc = result[0].imgsrc.replace('G:\\graduate\\graduation-project\\API\\', "http://localhost:9000/");
                }
                callback(null,result)
            })
        },
    }, function(err, results) {
        console.log("err========",err)
        console.log("results==========",results);
        res.render('specific', { result:results});
    });
});
module.exports = router;
