var express = require('express');
var router = express.Router();
var Http=require('../util/http_util');

/* GET users listing. */
router.get('/:id/information', function(req, res, next) {
    let userId=req.query.id;
    Http.get("http://127.0.0.1:9000/user/"+userId,{},(err, result)=>{
        let userName=result[0].name;
        let userId=result[0]._id ;
        res.render('user', { username: userName,id:userId });
    })

});


module.exports = router;
