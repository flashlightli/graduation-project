/*
 * @Author: devlin.wei 
 * @Date: 2017-11-30
 * @Last Modified by: devlin.wei
 * @Last Modified time: 2017-12-4
 */
const NODE_ENV          = process.env.NODE_ENV;
const fs                = require('fs');
const path              = require('path');
const confDir           = path.resolve(__dirname);
const appDir            = path.resolve(confDir, '../../');// 项目根目录
const localSettingsPath = path.join(confDir, "local_settings.json");// 本地配置文件的路径

exports.appDir          = appDir;// 项目的根目录
exports.port             = 9000;
exports.serverId         = process.pid;
exports.databases = {
    mongo:{
        "name":"TEST",
        "config":"mongodb://182.92.187.43:38017/configs"
    }
}

exports.logger = {
    categoryName: 'funliving',// 日志分类的名字
    level       : 'debug',// 日志记录级别
};

// 以下将使用本地的配置来替换上面的配置
const local_settings = JSON.parse(fs.readFileSync(localSettingsPath));

for (let attrName in local_settings) {
    exports[attrName] = local_settings[attrName];
}

console.log('-------------载入配置信息start-----------');
console.log('当前环境是: NODE_ENV = ', NODE_ENV);
console.log('当前环境是: NODE_ROUTER = ', process.env.NODE_ROUTER);
console.log(`配置文件: ${NODE_ENV}/settings.js,被载入`);
console.log('-------------载入配置信息end ------------');
