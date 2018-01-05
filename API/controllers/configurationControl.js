const loggerSettings = require('../logger');
const logger = loggerSettings.winstonLogger;
const utils = require('../util/util');
const request = require("request")

const appDao = require('../models/configs/configuration')
exports = module.exports = {

    list: async(req, res, next) => {
        try {
            let result = await appDao.list(req)
            res.json(result)
        } catch (err) {
            next(err)
        }
    },

    add:async(req,res,next)=>{
        try{
            let result = await appDao.add()
            res.json(result)
        }catch(err) {
            next(err)
        }
    },

    delete:async(req,res,next)=>{
        try{
            let result = await appDao.delete()
            res.json(result)
        }catch(err) {
            next(err)
        }
    },

    update:async(req,res,next)=>{
        try{
            let result = await appDao.update()
            res.json(result)
        }catch(err) {
            next(err)
        }
    },

    err: async (req, res, next) => {
        try {
            let bb = 1;
            let obj = { name: '张三' };
            let cc = bb.replace("ok", "22")
            logger.debug({ "name": "jfdksfj", "content": "cccc" })
            return res.json(cc)
        } catch (err) {
            next(err)
        }

    }
}