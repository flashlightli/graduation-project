const _                  = require('lodash');
const loggerSettings     = require('../logger');
const logger             = loggerSettings.winstonLogger;
const request            = require("request")


exports = module.exports = {
    search:function(args){
        return new Promise(( resolve, reject ) => {
            request(args.url, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    // var result = JSON.parse(body)
                    //callback(result.response)
                    resolve(body);
                } else {
                    reject(error);
                    //callback(null)
                }
            });
        });
    } 
}