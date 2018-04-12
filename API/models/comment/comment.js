var mongoHelper = require('../../util/mongoHelper');
var mongoose = require('mongoose');

const settings      = require(`../../conf/${process.env.NODE_ENV}/settings`);
var commentSchema = new mongoose.Schema({
    goodsId : {type : String},
    comment : {type : Array}
});
var mongoUtil = mongoHelper.pool(settings.databases.mongo.name,settings.databases.mongo.config)
const model = mongoUtil.model('user',commentSchema, 'user');

exports = module.exports = {
    get_by_id:async function(goodsId){
        let result=await model.find({'goodsId':goodsId});
        return result
    },
    add:async function(user){
        var newModel= new model(user);
        let result=await mongoHelper.insert(newModel)
        return result
    },
    update:async function(user){
        var newModel= new model(user);
        let result=await mongoHelper.insert(newModel)
        return result
    },
}