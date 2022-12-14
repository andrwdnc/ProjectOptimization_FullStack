const { isModuleNamespaceObject } = require("util/types")
const dbConn = require("../config/db.config") //module.exports = dbConn
//dbConn.conectar()

let User = function(user){
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

User.findAll = async function(result){
    //if(dbConn.state=="connected"){
        const sql = "select * from users"
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