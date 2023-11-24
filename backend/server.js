const express = require('express');
const app = express();
const mongoose = require('mongoose');
const connectDB = require('./config/dbCon');
const dotenv = require('dotenv').config()
// Connect to MongoDB
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.json({
        "hello": "world",
        "docker": "is hard"
    })
});

// Import Routes
app.use('/api/messages', require('./routes/messageRoutes'));

// Listen for requests if we have successully connected. That is when the open
// event is fired.
mongoose.connection.once('open', () => {
    console.log('MongoDB connection established successfully');
    app.listen(process.env.PORT, () => {
        console.log('Server started on port ' + process.env.PORT);
    });
})

