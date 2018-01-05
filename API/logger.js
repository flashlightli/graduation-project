/*
 * @Author: lwp 
 * @Date: 2017-10-25 18:39:51 
 * @Last Modified by:   lwp 
 * @Last Modified time: 2017-10-25 18:39:51 
 */

const settings        = require(`./conf/${process.env.NODE_ENV}/settings`);
const winston         = require('winston');
const expressWinston  = require('express-winston');
const DailyRotateFile = require('winston-daily-rotate-file');
const moment          = require('moment');
const dateFormat      = function () { return moment().format('YYYY-MM-DD HH:mm:ss:SSS'); };

// winstonLogger 设置
const infoTransport = new DailyRotateFile({
    name       : 'info-log',
    filename   : 'logs/info.log',
    timestamp  : dateFormat,
    level      : 'info',
    colorize   : true,
    maxsize    : 1024 * 1024 * 10,// 10M
    datePattern: '.yyyy-MM-dd'
});

const debugTransport = new DailyRotateFile({
    name       : 'debug-log',
    filename   : 'logs/debug.log',
    timestamp  : dateFormat,
    level      : 'debug',
    colorize   : true,
    maxsize    : 1024 * 1024 * 10,// 10M
    datePattern: '.yyyy-MM-dd'
});

const errorTransport = new DailyRotateFile({
    name       : 'error-log',
    filename   : 'logs/error.log',
    timestamp  : dateFormat,
    level      : 'error',
    colorize   : true,
    maxsize    : 1024 * 1024 * 10,// 10M
    datePattern: '.yyyy-MM-dd'
});

exports.winstonLogger = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)({
            timestamp  : dateFormat,
            level      : settings.logger.level,
            json       : true,
            colorize   : true,
            prettyPrint: true,
            align      : true,
        }),
        infoTransport,
        debugTransport,
        errorTransport
    ]
});

// expressLogger 设置
const accessLoggerTransport = new DailyRotateFile({
    name       : 'access',
    filename   : 'logs/access.log',
    timestamp  : dateFormat,
    level      : 'info',
    colorize   : true,
    maxsize    : 1024 * 1024 * 10,// 10M
    datePattern: '.yyyy-MM-dd'
});

exports.expressLogger = expressWinston.logger({
    transports: [
        accessLoggerTransport
    ]
});
