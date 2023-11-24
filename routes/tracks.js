const express = require("express")
const router = express.Router()


//TODO el http://localhost/tracks GET, POST, DELETE, PUT (CRUD)

router.get("/", (req,res) => {
    
   const data = ["Hola" , "mundo"]

    res.send({data})
})




module.exports = router