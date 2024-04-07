const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

const corsOptions = {
    origin : "http://localhost:5173",
    methods : "POST,GET,DELETE,UPDATE",
    credentials  : true
}

app.use(cors(corsOptions))
// app.use(cors())

app.use(express.json())

mongoose.connect("mongodb://localhost/registration")

const db = mongoose.connection

db.on("error",()=>{
    console.log("error")
})
db.once("open",()=>{
    console.log("connected")
})

require("./routes/user.route")(app)

app.listen(5000,()=>{
    console.log("server is started...")
})