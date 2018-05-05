/*
 * @Author: lwp 
 * @Date: 2017-10-25 18:39:58 
 * @Last Modified by: lwp
 * @Last Modified time: 2017-10-27 18:17:09
 */
"use strict";

const _              = require('lodash');
const settings       = require(`../conf/${process.env.NODE_ENV}/settings`);
const intformat      = require('biguint-format');
const loggerSettings = require('../logger');
const logger         = loggerSettings.winstonLogger;
const moment         = require('moment');
const JsBarcode      = require('jsbarcode');
// const Canvas         = require("canvas");
const fs             = require('fs');
const path           = require('path');
const formidable     = require('formidable');
const mail           = require('./mail')
// 检查必须携带的参数，只检查第一层
// 缺少参数则返回false
exports.checkMandatory = function (params, obj) {
    if (_.isArray(params)) {
        var keys = _.keys(obj);

        // params数组必须包含在keys数组里面
        var ret = _.remove(params, function (param) {
            return (keys.indexOf(param) > -1);
        });

        (0 != params.length) ? logger.debug("missing parameters: ", params) : 0;
        return _.isEmpty(params);
    }
    return false;
};

exports.handleError = function (res) {
    return function (error) {
        logger.error(error.message);
        return res.send(400, {error: error.message});
    };
};

exports.getAppDir = function () {
    return path.resolve(__dirname, '..');
};

// 客户端ip
exports.getClientIp = function (req) {
    return (req.ip.match(/\d+.\d+.\d+.\d+/g))[0];
};

// 获取两个时间相差的毫秒数
exports.getDiffMilliseconds = function (endTime, startTime) {
    startTime = moment(startTime) || moment();
    endTime   = moment(endTime);
    return endTime.diff(startTime);// 相差毫秒数
};

// 获取两个时间相差的天数
exports.getDiffDays = function (endTime, startTime) {
    startTime = moment(startTime) || moment();
    endTime   = moment(endTime);
    return endTime.diff(startTime, 'day');// 相差毫秒数
};

exports.mkdirs = {
    // 异步创建，无法保证先后执行回调的顺序
    async: function (dirname, callback) {
        fs.exists(dirname, function (exists) {
            if (exists) {
                callback();
            } else {
                exports.mkdirs.async(path.dirname(dirname), function () {
                    fs.mkdir(dirname, callback);
                });
            }
        });
    },
    // 同步创建，可保证顺序
    sync : function (dirname) {
        if (fs.existsSync(dirname)) {
            return true;
        } else {
            if (exports.mkdirs.sync(path.dirname(dirname))) {
                fs.mkdirSync(dirname);
                return true;
            }
        }
    }
};

exports.uploadImg =function (req,res) {
    var form = new formidable.IncomingForm();   //创建上传表单
    form.encoding = 'utf-8';        //设置编辑
    form.keepExtensions = true;     //保留后缀
    form.uploadDir=path.resolve(__dirname,'../public');
    form.maxFieldsSize = 2 * 1024 * 1024;   //文件大小
    let newname=moment().format("MM-DD-h-mm-ss");
    let extname = path.extname(req.files.files.name);
    var newPath =form.uploadDir +'/img/'+newname+extname;
    console.log(newPath);
    let  readable =  fs.createReadStream(req.files.files.path);
    let writable = fs.createWriteStream(newPath);
    readable.pipe(writable);
    res.send({
            status:1,
            path:newPath
    });
}

exports.sendEmail=function (req,res) {
    let body=req.body;
    let from=body.from;
    let to =body.to;
    let result=mail.sendEmail(from,to);
    res.json({message:result})
}