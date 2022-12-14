const { connect } = require("http2")
const mysql = require("mysql") //npm i mysql

const dbConn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"tienda_bd"
})

//Si no establece la conexión, tumbará el servidor
dbConn.establishConexion = function(){    
    dbConn.connect(function(err){
        if(err){
            console.log(err)
            process.exit(0)
        }else{
            console.log("DB MySQL Connected!")
            console.log(dbConn.state)
        }
    })
}

/*dbConn.connect(function(err){
    if(err){
        console.log(err)
    }else{
        console.log("DB MySQL Connected!")
    }
})*/

module.exports = dbConn