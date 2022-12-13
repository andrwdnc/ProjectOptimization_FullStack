const Venta = require("../models/venta.model")
//NECESARIO CAMBIAR LO DEMAS
exports.findAll = async function(req,res){
    await Venta.findAll(function(err,employees){
        if(err){
            res.send(err)
        }else{
            res.send(employees)            
        }   
    })
}

exports.findById = async function(req,res){
    const { id } = req.params
    await Employee.findById(id,function(err,employee){
        if(err){
            res.send(err)
        }else{            
            res.send(employee)            
        } 
    })
}

exports.create = async function(req,res){
    const newEmployee = new Employee(req.body)
    await Employee.create(newEmployee,function(err,employee){
        if(err){
            res.send(err)
        }else{
            console.log(employee)
            res.send(employee)            
        } 
    })
}

exports.update = async function(req,res){
    const employee = new Employee(req.body)
    const { id } = req.params
    await Employee.update(id,employee,function(err,employee_updated){
        if(err){
            res.send(err)
        }else{
            console.log(employee_updated)
            res.send(employee_updated)            
        } 
    })
}

exports.delete = async function(req,res){
    const { id } = req.params
    Employee.delete(id,function(err,employee_deleted){
        if(err){
            res.send(err)
        }else{
            console.log(employee_deleted)
            res.send(employee_deleted)            
        }
    })
}