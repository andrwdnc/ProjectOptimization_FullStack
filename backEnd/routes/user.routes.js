const usersController = require("../controllers/user.controller")
const express = require("express")
const router = express.Router()

router.get("/",usersController.findAll)

module.exports = router