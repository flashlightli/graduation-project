var mongoHelper = require('../../util/mongoHelper');
var mongoose = require('mongoose');

const settings      = require(`../../conf/${process.env.NODE_ENV}/settings`);
var newsSchema = new mongoose.Schema({
    goodsId : {type : String},
    user : {type : String} ,
    customer : {type : String} ,
    content : {type : String} ,
    time :  {type : String} ,
});
var mongoUtil = mongoHelper.pool(settings.databases.mongo.name,settings.databases.mongo.config)
const model = mongoUtil.model('newscomment',newsSchema, 'newscomment');

exports = module.exports = {
    add:async function(comment){
        var newModel= new model(comment);
        let result=await mongoHelper.insert(newModel)
        return result
    },
    select: async function(user){
        let result=await model.find({user:user}).sort({time:-1});
        return result
    },
}