var mongoHelper = require('../../util/mongoHelper');
var mongoose = require('mongoose');

const settings      = require(`../../conf/${process.env.NODE_ENV}/settings`);
var userSchema = new mongoose.Schema({
    name : {type : String},
    password : {type : String}
});
var mongoUtil = mongoHelper.pool(settings.databases.mongo.name,settings.databases.mongo.config)
const model = mongoUtil.model('user',userSchema, 'user');

exports = module.exports = {
    login:async function(user){
        let result=await mongoHelper.find(model,user);
        return result
    },
    add:async function(user){
        var newModel= new model(user);
        let result=await mongoHelper.insert(newModel)
        return result
    },
    getUser:async function(condition){
        let result=await model.find(condition);
        return result
    },
    updateUser:async function(user){
        let result=await mongoHelper.update(model,{name:user.name},user);
        return result
    },
}