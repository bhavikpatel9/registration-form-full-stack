const mongoose = require('mongoose')

const user_schema =  mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    number : {
        type : Number,
        required : true
    },
    password : {
        type : String,
        required : true
    }
})


module.exports = mongoose.model("user",user_schema)