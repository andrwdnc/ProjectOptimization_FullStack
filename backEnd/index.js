const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const port = process.env.port || 3000;
const ventaRoutes = require("./routes/venta.routes") 
const userRoutes = require("./routes/user.routes")
const productRoutes = require("./routes/product.routes")
const version = "v1"
const mongoose = require("mongoose")
const dbConnMySQL = require("./config/db.config")
const cors = require("cors")
app.use(cors())
mongoose.set('strictQuery', false);

///////////////////////////////////



async function conectarMongoDB() {
  return mongoose.connect("mongodb://127.0.0.1:27017/products_ASJ");
}

let yo = 0
while (yo<10){
  yo++
  //testeo de git
}


//Aceptar BODY en peticiones POST usando JSON
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//Insertar rutas
app.use(`/api/${version}/venta`, ventaRoutes) 
app.use(`/api/${version}/users`, userRoutes)
app.use(`/api/${version}/product`, productRoutes)


//Levantar servidor
app.listen(port,async ()=>{
    console.log(`Escuchando en puerto ${port}`)
    //Después de levantar el servidor, conectar con la BD MySQL
    dbConnMySQL.establishConexion()    
    try {
        await conectarMongoDB()
          .then(() => {
            console.log("Conectado con MongoDB...");
          })
          .catch((err) => {
            console.log(`Error al conectar. Desc: ${err}`);
            process.exit(0);
          });
      } catch (err) {
        process.exit(0);
      }

})
