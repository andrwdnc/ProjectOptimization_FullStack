const ventaController = require("../controllers/venta.controllers")
const express = require("express")
const router = express.Router()

router.get("/",ventaController.findAll)

module.exports = router