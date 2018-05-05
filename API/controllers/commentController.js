const loggerSettings = require('../logger');
const logger = loggerSettings.winstonLogger;
const utils = require('../util/util');
const request = require("request")

const commentDao = require('../models/comment/comment')

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
            if (result && result.comment.length >0) {
                result.comment.push({
                    user : comment.user,
                    comments : comment.comment
                });
                let result1 = await commentDao.update(result);
                res.json(result1)
            }else {
                let result1 = await commentDao.add({goodsId:comment.goodsId,comment:[{
                    user:comment.user,comments:comment.comment
                    }]});
                res.json(result1)
            }
        } catch (err) {
            next(err)
        }
    },
}