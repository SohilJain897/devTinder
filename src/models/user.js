const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
    },
    lastName :{
        type: String,
    },
    emailId :{
        type: String,
    },
    Password :{
        type: String,
    },
    Age :{
        type: Number,
    },
    Gender :{
        type: String,
    },
});

module.exports = mongoose.model("User",userSchema);