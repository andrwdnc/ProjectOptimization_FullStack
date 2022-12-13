const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const port = process.env.port || 3000;
const ventaRoutes = require("./routes/venta.routes") 
const userRoutes = require("./routes/user.routes")
const version = "v1"
const mongoose = require("mongoose")
const dbConnMySQL = require("./config/db.config")
const cors = require("cors")
app.use(cors())

//Aceptar BODY en peticiones POST usando JSON
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//Insertar rutas
app.use(`/api/${version}/venta`, ventaRoutes) 
app.use(`/api/${version}/users`, userRoutes)


//Levantar servidor
app.listen(port,()=>{
    console.log(`Escuchando en puerto ${port}`)
    //Después de levantar el servidor, conectar con la BD MySQL
    dbConnMySQL.establishConexion()    
})
