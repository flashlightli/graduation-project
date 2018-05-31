var mongoHelper = require('../../util/mongoHelper');
var mongoose = require('mongoose');

const settings      = require(`../../conf/${process.env.NODE_ENV}/settings`);
var commentSchema = new mongoose.Schema({
    goodsId : {type : String},
    comment : {type : Array}
});
var mongoUtil = mongoHelper.pool(settings.databases.mongo.name,settings.databases.mongo.config)
const model = mongoUtil.model('comment',commentSchema, 'comment');

exports = module.exports = {
    get_by_id:async function(goodsId){
        let result=await model.findOne({'goodsId':goodsId});
        return result
    },
    add:async function(comment){
        var newModel= new model(comment);
        let result=await mongoHelper.insert(newModel)
        return result
    },
    update:async function(comment){
        let result=await mongoHelper.update(model,{goodsId:comment.goodsId},comment);
        return result
    },
    updateNews:async function(reply){
        let result=await mongoHelper.update(model,{goodsId:reply.goodsId},reply);
        return result
    },
}