import { getAllProducts } from "../controllers/user.controller";
const express = require("express")
const router = express.Router()

router.get("/users",getAllProducts)

module.exports = router