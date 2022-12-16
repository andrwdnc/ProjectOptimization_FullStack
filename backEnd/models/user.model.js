const { isModuleNamespaceObject } = require("util/types")
const dbConn = require("../config/db.config") 


let User = function(user){
    this.nif = user.nif
    this.first_name = user.first_name,
    this.last_name = user.last_name
}

User.findAll = async function(result){
        const sql = "select * from users"
        dbConn.query(sql, function(err,res){
            if(err){
                console.log(err)
                result(err,null)
            }else{
                result(null,res)
            }        
        })
}

User.findById = async function(id,result){
    const sql = "select * from users where id = ?"
    dbConn.query(sql,id,function(err,res){
        if(err){
            console.log(err)
            result(err,null)
        }else{
            result(null,res)
        } 
    })
}

User.create = async function(newUser,result){
    const sql = "INSERT INTO users SET ?"
    dbConn.query(sql,newUser,function(err,res){
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

User.update = async function(id,user,result){
    //const sql = "UPDATE employees SET first_name=?, last_name=?, email=?, phone=?, organization=?, designation=?, salary=?, state=? WHERE ID=?"
    const sql = "UPDATE users SET ? WHERE ID=?"
    dbConn.query(sql,[user,id],function(err,res){
        if(err){
            console.log(err)
            result(err,null)
        }else{
            result(null,res)
        }
    })
}


User.delete = async function(id,result){
    const sql = "DELETE FROM users WHERE id=?"
    dbConn.query(sql,id,function(err,res){
        if(err){
            console.log(err)
            result(err,null)
        }else{
            result(null,res)
        }
    })
}


module.exports = User