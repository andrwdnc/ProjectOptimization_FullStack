const Product = require("../models/products.model")

export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();

        return res.json({ products });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "error de servidor" });
    }
};