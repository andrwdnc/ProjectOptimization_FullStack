const User = require("../models/user.model")

exports.findAll = async function(req,res){
    await User.findAll(function(err,users){
        if(err){
            res.send(err)
        }else{
            res.send(users)            
        }   
    })
}

exports.findById = async function(req,res){
    const { id } = req.params
    await User.findById(id,function(err,users){
        if(err){
            res.send(err)
        }else{            
            res.send(users)            
        } 
    })
}

exports.create = async function(req,res){
    const newUser = new User(req.body)
    await User.create(newUser,function(err,user){
        if(err){
            res.send(err)
        }else{
            console.log(user)
            res.send(user)            
        } 
    })
}

exports.update = async function(req,res){
    const user = new User(req.body)
    const { id } = req.params
    await User.update(id,user,function(err,user_updated){
        if(err){
            res.send(err)
        }else{
            console.log(user_updated)
            res.send(user_updated)            
        } 
    })
}

exports.delete = async function(req,res){
    const { id } = req.params
    await User.delete(id,function(err,venta_deleted){
        if(err){
            res.send(err)
        }else{
            console.log(venta_deleted)
            res.send(venta_deleted)            
        }
    })
}