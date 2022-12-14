import { getAllProducts } from "../controllers/product.controller";
const express = require("express")
const router = express.Router()

router.get("/products",getAllProducts)

module.exports = router