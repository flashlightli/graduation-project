const loggerSettings = require('../logger');
const logger = loggerSettings.winstonLogger;
const utils = require('../util/util');
const request = require("request")

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