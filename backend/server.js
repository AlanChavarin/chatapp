const express = require('express');
const app = express();
const mongoose = require('mongoose');
const connectDB = require('./config/dbCon');
const PORT = 5000;

// Connect to MongoDB
connectDB();

app.get('/', (req, res) => {
    res.json({
        "hello": "world",
        "docker": "is hard"
    })
});

// Listen for requests i we have successully connected to MongoDB. This is when
// open evenet is emitted by the mongoose connection.
mongoose.connection.once('open', () => {
    console.log('MongoDB connected');
    app.listen(PORT, () => {
        console.log('Server started on port ${PORT}');
    });
})

