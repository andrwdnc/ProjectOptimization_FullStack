import { getAllProducts } from "../controllers/venta.controller";
const express = require("express")
const router = express.Router()

router.get("/ventas",getAllProducts)

module.exports = router