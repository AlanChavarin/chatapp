const mongoose = require('mongoose');
const dotenv = require('dotenv').config()

// const MONGODB_URI = '';

const connectDB = async () => {
    console.log(process.env.MONGODB_URI)

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connected');
    }
    catch (err) {
        console.error(err.message);
    }
}

module.exports = connectDB;