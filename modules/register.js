const mongoose = require('mongoose')
const { type } = require('os')

const { v4 : uuidv4} = require('uuid')
const schema = mongoose.Schema


const userdetails = new schema({
    user_uuid:{
        type:String,
        required:true,
        unique:true,
        default:uuidv4()
    },
    user_name:{
        type:String,
        required:true,
    },
    user_password:{
        type:String,
        require:true
    }
})


const shop = mongoose.model("userdetails", userdetails, "registerdetails");


module.exports = shop