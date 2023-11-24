const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
    text: {
        type: String,
        required: true,
    },

    // sender: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User',
    //     required: true
    // },
    // chatRoom: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'ChatRoom',
    //     required: true
    // },
    
}, {timestamps: true}
)



const Message = mongoose.model('Message', messageSchema);

module.exports = Message;