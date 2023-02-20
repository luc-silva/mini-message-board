const express = require("express")
const router = express()

router.get("/", (request, response) =>{
  response.render("form")
})

module.exports = router