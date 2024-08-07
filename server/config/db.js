const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/chatApplication';

const connectDB = async() => {
    try{
        await mongoose.connect(url);
        console.log("database connected");
    }
    catch(e)
    {
        throw new Error(e.message);
    }
}

module.exports = connectDB;