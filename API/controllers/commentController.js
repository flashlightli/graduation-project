const loggerSettings = require('../logger');
const logger = loggerSettings.winstonLogger;
const utils = require('../util/util');
const request = require("request")
var moment = require('moment');

const commentDao = require('../models/comment/comment');
const newsDao = require('../models/comment/newscomment');

exports = module.exports = {
    select: async (req, res, next) => {
        try {
            let information_id = req.params.id;
            let result = await commentDao.get_by_id(information_id);
            res.json(result)
        } catch (err) {
            next(err)
        }
    },
    add: async (req, res, next) => {
        try {
            let comment = req.body;
            if(comment.user == ""){
                comment.user = "匿名"
            }
            let result = await commentDao.get_by_id(comment.goodsId);
            var time = moment().format("YYYY-MM-DD HH:mm:ss");
            if (result && result.comment.length >0) {
                result.comment.push({
                    user : comment.user,
                    comments : comment.comment,
                    time : time,
                    others : []
                });
                let result1 = await commentDao.update(result);
                let temp = await newsDao.add({
                    customer : comment.user,
                    content : comment.comment,
                    time : time ,
                    goodsId : comment.goodsId,
                    user:comment.havepeople,
                });
                res.json(result1)
            }else {
                let result1 = await commentDao.add({goodsId:comment.goodsId,comment:[{
                    user:comment.user,comments:comment.comment ,time:time, others : []
                    }]});
                let temp = await newsDao.add({
                    customer : comment.user,
                    content : comment.comment,
                    time : time ,
                    goodsId : comment.goodsId,
                    user:comment.havepeople ,
                });
                res.json(result1)
            }
        } catch (err) {
            next(err)
        }
    },
    update: async (req, res, next) => {
        try {
            var comment = req.body;
            let result = await commentDao.get_by_id(comment.goodsId);
            console.log(comment)
            var time = moment().format("YYYY-MM-DD HH:mm:ss");
            if(comment.big==0){
                result.comment[comment.high].others.push({from:comment.from,to:comment.to,content:comment.content,time:time})
                var cols = commentDao.updateNews(result);
                let temp = await newsDao.add({
                    customer : comment.from,
                    content : comment.content,
                    time : time ,
                    goodsId : comment.goodsId,
                    user:comment.to ,
                });
                res.json(cols)
            }else {
                var len = result.comment[comment.high].others.length-1;
                var temp1 = result.comment[comment.high].others.slice(0, Number(comment.high2)+1);
                var temp2 = result.comment[comment.high].others.slice(Number(comment.high2)+1, len);
                temp1.push({from:comment.from,to:comment.to,content:comment.content,time:time})
                result.comment[comment.high].others = temp1.concat(temp2);
                var cols = commentDao.updateNews(result);
                let temp = await newsDao.add({
                    customer : comment.from,
                    content : comment.content,
                    time : time ,
                    goodsId : comment.goodsId,
                    user:comment.to ,
                });
                res.json(cols)
            }

        }catch (err) {
            next(err)
        }
    },
    search:  async (req, res, next) => {
        try {
            var username= req.body.username;
            var results =await newsDao.select(username);
            res.json(results)
        }catch (err) {
            next(err)
        }
    }
}