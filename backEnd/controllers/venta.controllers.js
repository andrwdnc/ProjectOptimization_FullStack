const Venta = require("../models/venta.model")

exports.findAll = async function(req,res){
    await Venta.findAll(function(err,ventas){
        if(err){
            res.send(err)
        }else{
            res.send(ventas)            
        }   
    })
}

exports.findById = async function(req,res){
    const { id } = req.params
    await Venta.findById(id,function(err,ventas){
        if(err){
            res.send(err)
        }else{            
            res.send(ventas)            
        } 
    })
}

exports.create = async function(req,res){
    const newVenta = new Venta(req.body)
    await Venta.create(newVenta,function(err,venta){
        if(err){
            res.send(err)
        }else{
            console.log(venta)
            res.send(venta)            
        } 
    })
}

exports.update = async function(req,res){
    const venta = new Venta(req.body)
    const { id } = req.params
    await Venta.update(id,venta,function(err,venta_updated){
        if(err){
            res.send(err)
        }else{
            console.log(venta_updated)
            res.send(venta_updated)            
        } 
    })
}

exports.delete = async function(req,res){
    const { id } = req.params
    Venta.delete(id,function(err,venta_deleted){
        if(err){
            res.send(err)
        }else{
            console.log(venta_deleted)
            res.send(venta_deleted)            
        }
    })
}