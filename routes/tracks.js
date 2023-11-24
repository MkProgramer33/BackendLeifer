const express = require("express")
const router = express.Router()
const {getItems} = require ("../controllers/tracks")

//TODO el http://localhost/tracks GET, POST, DELETE, PUT (CRUD)

router.get("/", getItems)




module.exports = router