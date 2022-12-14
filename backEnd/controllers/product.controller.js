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