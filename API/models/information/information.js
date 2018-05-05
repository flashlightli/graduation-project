var mongoHelper = require('../../util/mongoHelper');
var mongoose = require('mongoose');

const settings      = require(`../../conf/${process.env.NODE_ENV}/settings`);
var informationSchema = new mongoose.Schema({
    name : {type : String},
    email : {type : String},
    txetara : {type : String},
    imgsrc : {type : String},
    user : {type : String},
    type : {type : String},
    contentType : {type : String} ,
    hot : {type : Number,default:0}
});
var mongoUtil = mongoHelper.pool(settings.databases.mongo.name,settings.databases.mongo.config)
const model = mongoUtil.model('information',informationSchema, 'information');

exports = module.exports = {
    add:async function(comment){
        var newModel= new model(comment);
        let result=await mongoHelper.insert(newModel)
        return result
    },
    show:async function(query){
        var condition={type:query.type};
        console.log(query)
        if(query.currentPage=='undefined'){
            query.currentPage =1;
            console.log("2222222")
        }
        if(query.goodsType!='undefined'){
           condition={
               type:query.type,
               contentType:query.goodsType
           }
        }
        let result=await model.find(condition).skip((query.currentPage-1)*9).limit(9).sort({_id:-1});
        return result
    },
    detail:async function(query){
        let result=await model.findOne({_id:query});
        result.hot = result.hot +1;
        let update=await mongoHelper.update(model,{_id:query},result);
        return [result]
    },
    get_by_user:async function(query){
        let result=await model.find({user:query});
        return result
    },
    del:async function(query){
        let result=await model.remove({_id:query});
        return result
    },
    hot_select:async function(){
        let result=await model.find().sort({hot:-1}).limit(8);
        return result
    },
    search:async function(s_name,ttype){
        var name = new RegExp(s_name);
        let result=await model.find({name:name,type:ttype}).limit(8);
        return result
    },
}