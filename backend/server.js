const express = require('express');
const app = express();
const PORT = 5000;
const mongoose = require('mongoose');
const connectDB = require('./config/dbCon');

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

// Listen for requests if we havesuccessully connected. That is when the open
// event is fired.
mongoose.connection.once('open', () => {
    console.log('MongoDB connection established successfully');
    app.listen(PORT, () => {
        console.log('Server started on port ' + PORT);
    });
})

