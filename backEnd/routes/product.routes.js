const productController = require("../controllers/product.controller")
const express = require("express")
const router = express.Router()

router.get("/",productController.findAll)
router.get("/:id",productController.findId)
router.post("/",productController.create)
router.patch("/:id",productController.update)
router.delete("/:id",productController.delete)

module.exports = router