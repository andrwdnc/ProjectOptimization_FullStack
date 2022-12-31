const usersController = require("../controllers/user.controller")
const express = require("express")
const router = express.Router()

router.get("/",usersController.findAll)
router.get("/:id", usersController.findById)
router.post("/",usersController.create)
router.put("/:id",usersController.update)
router.delete("/:id",usersController.delete)

module.exports = router