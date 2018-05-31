const loggerSettings = require('../logger');
const logger = loggerSettings.winstonLogger;
const utils = require('../util/util');
const request = require("request");
var crypto = require('crypto');

const userDao = require('../models/user/user')

exports = module.exports = {
    login:async(req,res,next)=>{
        try{
            let user=req.body;
            let result = await userDao.login(user)
            res.json(result)
        }catch(err) {
            next(err)
        }
    },
    add:async(req,res,next)=>{
        try{
            let user=req.body;
            var md5 = crypto.createHash('md5');   //crypto模块功能是加密并生成各种散列
            user.password=md5.update(user.password).digest('hex');
            let result = await userDao.add(user)
            res.json(result)
        }catch(err) {
            next(err)
        }
    },
    getUser:async(req,res,next)=>{
        try{
            let userId=req.params.id;
            let result = await userDao.getUser({'_id':userId})
            res.json(result)
        }catch(err) {
            next(err)
        }
    },
    check:async(req,res,next)=>{
        try{
            let username=req.params.username;
            let result = await userDao.check({'name':username})
            res.json(result)
        }catch(err) {
            next(err)
        }
    },
    updateUser:async(req,res,next)=>{
        try{
            let user=req.body;
            let result = await userDao.updateUser(user)
            res.json(result)
        }catch(err) {
            next(err)
        }
    },
}