const mongoose = require('mongoose');

const connectDb = async () => {
await mongoose.connect
("mongodb+srv://sohiljain897:Golujain69@cluster0.f4yrgjw.mongodb.net/DevTinder");
}


module.exports = connectDb;