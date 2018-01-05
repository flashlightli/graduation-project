var mongoose = require('mongoose');



const pools = {}

exports.pool = function(name,conf){
    if(pools[name]){
        return pools[name]
    }
    var db = mongoose.createConnection(conf,{
        server: {
            auto_reconnect: true,
            poolSize: 2
        }
    });
    pools[name] = db;
    db.on('error',function (err) {
        console.log('Mongoose connection error: ' + err);
    });
    return db;
}

exports.find = async function(model,query){
    return new Promise((resolve, reject)=>{
        model.find(query,function(err,res){
            if(err){
                reject(err)
                return
            }
            resolve(res)
        })
    })
}
exports.findOne = async function(model,query){
    return new Promise((resolve, reject)=>{
        model.findOne(query,function(err,res){
            if(err){
                reject(err)
                return
            }
            resolve(res)
        })
    })
}


exports.insert=async function(model) {
    return new Promise((resolve,reject)=>{
        model.save(function (err,res) {
            if(err){
                reject(err)
                return
            }
            resolve(res)
        })
    })
}

exports.update=async function(model,updateSite,update) {
    return new Promise((resolve,reject)=>{
        model.update(updateSite,update,function (err,res) {
            if(err){
                reject(err)
                return
            }
            resolve(res);
        })
    })
}

exports.delete=async function(model,condition) {
    return new Promise((resolve,reject)=>{
        model.remove(condition,function (err,res) {
            if(err){
                reject(err)
                return
            }
            resolve(res);
        })
    })
}