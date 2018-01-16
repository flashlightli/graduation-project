var mongoHelper = require('../../util/mongoHelper');
var mongoose = require('mongoose');

const settings      = require(`../../conf/${process.env.NODE_ENV}/settings`);
var informationSchema = new mongoose.Schema({
    name : {type : String},
    email : {type : String},
    txetara : {type : String},
    imgsrc : {type : String},
    user : {type : String},
    type : {type : String}
});
var mongoUtil = mongoHelper.pool(settings.databases.mongo.name,settings.databases.mongo.config)
const model = mongoUtil.model('information',informationSchema, 'information');

exports = module.exports = {
    add:async function(user){
        var newModel= new model(user);
        let result=await mongoHelper.insert(newModel)
        return result
    },
    show:async function(query){
        let result=await model.find({type:query.type}).skip((query.currentPage-1)*6).limit(6).sort({_id:-1});
        return result
    }
}