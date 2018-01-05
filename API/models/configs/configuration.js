var mongoHelper = require('../../util/mongoHelper');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const settings= require(`../../conf/${process.env.NODE_ENV}/settings`);
var configurationSchema = new mongoose.Schema({
    application : {type : Schema.Types.ObjectId},
    config  : {type : String},
    version : {type : Number},
    body : {type : Object}
});
var mongoUtil = mongoHelper.pool(settings.databases.mongo.name,settings.databases.mongo.config)
const model1 = mongoUtil.model('configuration',configurationSchema, 'configuration');

exports = module.exports = {
    list: async function(req){
        let tempApplication=req.params.page;
        let result = await mongoHelper.find(model1,{application:tempApplication});
        return result
    },
    find: async function(){
        let result = await mongoHelper.find(model1,{})
        return result
    },
    add:async function(config){
        var newModel=new model1(config);
        let result=await mongoHelper.insert(newModel)
        return result
    },
    update:async function(updateSite,update){
        let result=await mongoHelper.update(model1,updateSite,update);
        return result;
    }
    ,
    delete:async function(condition){
        let result=await mongoHelper.delete(model1,condition)
        return result
    }
}