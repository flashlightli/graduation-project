var mongoHelper = require('../../util/mongoHelper');
var mongoose = require('mongoose');
var configuration=require('./configuration');

const settings      = require(`../../conf/${process.env.NODE_ENV}/settings`);
var applicationSchema = new mongoose.Schema({
    name : {type : String},
    configs : {type : Array}
});
var mongoUtil = mongoHelper.pool(settings.databases.mongo.name,settings.databases.mongo.config)
const model = mongoUtil.model('application',applicationSchema, 'application');

exports = module.exports = {
    list: async function(req){
        let page=req.query.page;
        let rows=req.query.rows;
        let result = await mongoHelper.find(model,{});
        return result;
    },
    find: async function(req){
        var temp1=[];
        var temp2=[];
        var temp3=[];
        let tempName=req.params.name;
        let result = await mongoHelper.findOne(model,{name:tempName});
        // await console.log(result[0].id);
        // console.log('--2-2---',result);
        let result1 = result.toObject();
        delete result1.configs;
        let newResult=await configuration.find({application:result1.id});
        for(let i=0;i<newResult.length;i++){
            temp1.push(newResult[i].config);
            temp2.push(newResult[i].body);
            temp3.push(newResult[i].version);
            result1[temp1[i]] = temp2[i];
            result1[temp1[i]].version= temp3[i];
        }
        // await console.log(result1);
        return result1;
    } ,
    add:async function(req){
        let newApp=req.body.app;
        var newModel= new model(newApp);

        let result=await mongoHelper.insert(newModel)
        return result
    },
    update:async function(updateSite,update){
        let result=await mongoHelper.update(model,updateSite,update);
        return result;
    }
    ,
    delete:async function(condition){
        let result=await mongoHelper.delete(model,condition)
        return result
    }
}