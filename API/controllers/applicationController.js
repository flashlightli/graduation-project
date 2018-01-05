const loggerSettings = require('../logger');
const logger = loggerSettings.winstonLogger;
const utils = require('../util/util');
const request = require("request")

const appDao = require('../models/configs/application')
exports = module.exports = {

    list: async(req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
        res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
        res.header("X-Powered-By",' 3.2.1')
        try {

            let result = await appDao.list(req)
            res.json(result)
        } catch (err) {
            next(err)
        }
    },

    find:async (req,res,next) =>{
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
        res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
        res.header("X-Powered-By",' 3.2.1')
        try {
            let result = await appDao.find(req);
            res.json(result)
        } catch (err) {
            next(err)
        }
    },

    // await: async (req, res, next) => {

    //     let obj = { name: '张三' };

    //     try {
    //         let bb = await TestDao.search({ url: "http://www.baidu.com" });

    //         let cc = await TestDao.search({ url: "http://www.sina.com.cn" })
    //         obj.baidu = bb.length
    //         obj.sina = cc.length
    //         return res.json(obj)
    //     } catch (err) {
    //         next(err)
    //     }


    // },
    add:async(req,res,next)=>{
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
        res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
        res.header("X-Powered-By",' 3.2.1')
        try{
            let result = await appDao.add(req)
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