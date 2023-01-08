const { isModuleNamespaceObject } = require("util/types")
const dbConn = require("../config/db.config") 


let Venta = function(venta){
    this.nif_usuario = venta.nif_usuario,
    this.factura = venta.factura
}

Venta.findAll = async function(result){
    
        const sql = "select * from ventas"
        dbConn.query(sql, function(err,res){
            if(err){
                console.log(err)
                result(err,null)
            }else{
                result(null,res)
            }        
        })

}

Venta.findById = async function(id,result){
    const sql = "select * from ventas where idventas = ?"
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
            result(null,{idInserted})
        }
    })
}

Venta.update = async function(id,venta,result){
    const sql = "UPDATE ventas SET ?  WHERE idventas=?"
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
    const sql = "DELETE FROM ventas WHERE idventas=?"
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