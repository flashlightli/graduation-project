/*
 * @Desc:启动程序
 * @Author: lwp 
 * @Date: 2017-10-26 11:45:36 
 * @Last Modified by: lwp
 * @Last Modified time: 2017-10-26 14:20:05
 */
const _        = require('lodash');
const NODE_ENV = process.env.NODE_ENV;
const NODE_ROUTER = process.env.NODE_ROUTER;

if (_.isUndefined(NODE_ENV)) {
    console.log('请先指定环境变量,NODE_ENV,值为 dev || pro');
    return process.exit(1);
}
const settings          = require(`./conf/${NODE_ENV}/settings`);
const http              = require('http');
const https             = require('https');
const fs                = require('fs');
const express           = require('express');
const bodyParser        = require('body-parser');
const connectMultiparty = require('connect-multiparty');
const cors              = require('cors');
const cookieParser      = require('cookie-parser');
const moment            = require('moment');
const program           = require('commander');
const expressValidator  = require('express-validator');
const app               = express();
const Router            = require(`./routers/${NODE_ROUTER}/router`);
const httpServer        = http.createServer(app);
const loggerSettings    = require('./logger');
const logger            = loggerSettings.winstonLogger;

global.appSettings = settings
//const mysqlConn         = require('./util/mysqlConnect');

app.use(loggerSettings.expressLogger);// 日志设置
app.use('/public', express.static('./public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json({limit: "20480kb"}));
//app.use(expressValidator()); // this line must be immediately after any of the bodyParser middlewares!
app.use(connectMultiparty());
app.use(cors());
app.use(function (req, res, next) {
    res.contentType('application/json');
    next();
});

app.use('/', Router);
// catch the uncaught errors that weren't wrapped in a domain or try catch statement
// do not use this in modules, but only in applications, as otherwise we could have multiple of these bound
process.on('uncaughtException', function (err) {
    // handle the error safely
    logger.error("uncaught error:", err);
});

const time = moment().format('YYYY-MM-DD HH:mm');
httpServer.listen(settings.port, function () {
    console.log("http://127.0.0.1:"+settings.port)
    logger.info('HTTP server listening on %d pid', settings.port, process.pid, time);
});



//err middleware
app.use(function (err, req, res, next) {
    logger.error('Error2222 happened!! ', err);
    const statusCode = err.statusCode || 500;
    delete err.statusCode;
    console.log(err)
    res.status(statusCode).json({"message":err.message,"stack":err.stack});
});
module.exports = app;
