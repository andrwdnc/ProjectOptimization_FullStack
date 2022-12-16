const ventaController = require("../controllers/venta.controllers")
const express = require("express")
const router = express.Router()

router.get("/",ventaController.findAll)
router.get("/:id",ventaController.findById)
router.post("/",ventaController.create)
router.put("/:id",ventaController.update)
router.delete("/:id", ventaController.delete)


module.exports = router