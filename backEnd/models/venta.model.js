const { isModuleNamespaceObject } = require("util/types")
const dbConn = require("../config/db.config") //module.exports = dbConn
//dbConn.conectar()

let Venta = function(venta){
    
    // this.first_name = employee.first_name,
    // this.last_name = employee.last_name,
    // this.email = employee.email,
    // this.phone = employee.phone,
    // this.organization = employee.organization,
    // this.designation = employee.designation,
    // this.salary = employee.salary,
    // this.state = employee.state,
    // this.create_at = new Date()
}

Venta.findAll = async function(result){
    //if(dbConn.state=="connected"){
        const sql = "select * from ventas"
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

Venta.findById = async function(id,result){
    const sql = "select * from ventas where id = ?"
    dbConn.query(sql,id,function(err,res){
        if(err){
            console.log(err)
            result(err,null)
        }else{
            result(null,res)
        } 
    })
}

Venta.create = async function(newVenta,result){
    const sql = "INSERT INTO ventas SET ?"
    dbConn.query(sql,newVenta,function(err,res){
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

Venta.update = async function(id,venta,result){
    //const sql = "UPDATE employees SET first_name=?, last_name=?, email=?, phone=?, organization=?, designation=?, salary=?, state=? WHERE ID=?"
    const sql = "UPDATE ventas SET ? WHERE ID=?"
    dbConn.query(sql,[venta,id],function(err,res){
        if(err){
            console.log(err)
            result(err,null)
        }else{
            result(null,res)
        }
    })
}


Venta.delete = async function(id,result){
    const sql = "DELETE FROM ventas WHERE id=?"
    dbConn.query(sql,id,function(err,res){
        if(err){
            console.log(err)
            result(err,null)
        }else{
            result(null,res)
        }
    })
}


module.exports = Venta