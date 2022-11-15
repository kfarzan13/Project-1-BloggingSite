const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true,
        enum: ["Mr","Mrs","Miss"]
    },
    Email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required : true
    }
}, {timestamps: true });

module.exports = mongoose.model('author', authorSchema)

