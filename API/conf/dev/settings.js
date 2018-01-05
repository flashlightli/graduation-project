
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
        "name":"demo1",
        "config":"mongodb://127.0.0.1:27017/graduation"
    }
}

exports.logger = {
    categoryName: 'hybtest',// 日志分类的名字
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
