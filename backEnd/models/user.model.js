const { isModuleNamespaceObject } = require("util/types")
const dbConn = require("../config/db.config") //module.exports = dbConn
//dbConn.conectar()

let Venta = function(employee){
    this.first_name = employee.first_name,
    this.last_name = employee.last_name,
    this.email = employee.email,
    this.phone = employee.phone,
    this.organization = employee.organization,
    this.designation = employee.designation,
    this.salary = employee.salary,
    this.state = employee.state,
    this.create_at = new Date()
}

Employee.findAll = async function(result){
    //if(dbConn.state=="connected"){
        const sql = "select * from employees"
        dbConn.query(sql, function(err,res){
            if(err){
                console.log(err)
                result(err,null)
            }else{
                result(null,res)
            }        
        })
    /*}else{
        console.log("Not connected to MySQL")
        result(null,null)
    }*/
}

Employee.findById = async function(id,result){
    const sql = "select * from employees where id = ?"
    dbConn.query(sql,id,function(err,res){
        if(err){
            console.log(err)
            result(err,null)
        }else{
            result(null,res)
        } 
    })
}

Employee.create = async function(newEmployee,result){
    const sql = "INSERT INTO employees SET ?"
    dbConn.query(sql,newEmployee,function(err,res){
        if(err){
            console.log(err)
            result(err,null)
        }else{
            console.log(res)
            const idInserted = res.insertId
            result(null,{idInserted}) //Devolvemos el ID nuevo insertado auto-incremental
        }
    })
}

Employee.update = async function(id,employee,result){
    //const sql = "UPDATE employees SET first_name=?, last_name=?, email=?, phone=?, organization=?, designation=?, salary=?, state=? WHERE ID=?"
    const sql = "UPDATE employees SET ? WHERE ID=?"
    dbConn.query(sql,[employee,id],function(err,res){
        if(err){
            console.log(err)
            result(err,null)
        }else{
            result(null,res)
        }
    })
}


Employee.delete = async function(id,result){
    const sql = "DELETE FROM employees WHERE id=?"
    dbConn.query(sql,id,function(err,res){
        if(err){
            console.log(err)
            result(err,null)
        }else{
            result(null,res)
        }
    })
}


module.exports = Employee