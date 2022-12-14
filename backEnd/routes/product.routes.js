const productController = require("../controllers/product.controller")
const express = require("express")
const router = express.Router()

router.get("/",productController.getAllProducts)

module.exports = router