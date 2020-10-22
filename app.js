const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const port = process.env.PORT || 1900

app.use(cors())
app.use(bodyParser.json())

app.get("/", (req,res,next) => {
    res.send("This is the IMC nodeMailer application")
})

app.listen(port, ()=> {
    console.log(`Listening for Customer Inquires on PORT : ${port}`)
})