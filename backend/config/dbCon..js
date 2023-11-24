const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb+srv://cameroncobb411:ncHRVQSUe89Avg9@chatapp.uroxk46.mongodb.net/?retryWrites=true&w=majority';

const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI, {
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