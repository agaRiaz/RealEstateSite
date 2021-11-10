const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    text:{
        type:String,
        required:true
    }
})


//now we need to create collections

const User = new mongoose.model("User",userSchema);

module.exports = User;