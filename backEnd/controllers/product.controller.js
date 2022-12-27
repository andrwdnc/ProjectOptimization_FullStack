const Product = require("../models/products.model")

exports.findAll = async (req, res) => {
    try {
        const products = await Product.find();

        return res.json({ products });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "error de servidor" });
    }
};

exports.findId = async(req,res)=>{
    try{
        const { id } = req.params
        const product = await Product.findById(id)
        if(product){
            return res.json({product})
        }else{
            console.log("Producto no encontrado")
        }
    }catch(error){
        console.log(error)
        return res.status(500).json({error: "error de servidor"})
    }
}

exports.create = async(req,res)=>{
    try{
        
        const newProduct = new Product(req.body)
        const resultado = await newProduct.save()
        if(resultado){
            return res.json({resultado})
        }else{
            console.log("Error creando producto")
        }
    }catch(error){
        console.log(error)
        return res.status(500).json({error: "error de servidor"})
    }
}

exports.update = async(req,res)=>{
    try{
        const {id} = req.params
        const pActualizado = await Product.findByIdAndUpdate(id,req.body,{ runValidators:true, new:true})
        if(pActualizado){
            return res.json({pActualizado})
        }else{
            console.log("Error actualizando")
        }
    }catch(error){
        console.log(error)
        return res.status(500).json({error: "error de servidor"})
    }
}




exports.delete = async(req,res)=>{
    try{
        const { id } = req.params
        const resultado = await Product.findByIdAndDelete(id)
        if(resultado){
            return res.json({resultado})
        }else{
            console.log("El producto no se ha podido eliminar")
        }
    }catch(error){
        console.log(error)
        return res.status(500).json({error: "error de servidor"})
    }
}

