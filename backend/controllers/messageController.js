const Message = require('../models/messageModel.js');

const getMessages = async (req, res) => {
    try {
        const messages = await Message.find();
        res.status(200);
        res.json(messages);
    } catch (err) {
        res.json('There was an error retrieving the messages: ' + err);
    }
}

const getMessage = async (req, res) => {
    try {
        const message = await Message.findById(req.params.messageId);
        res.status(200);
        res.json(message);
    }
    catch (err) {
        res.json('There was an error retreiving the message: ' + err);
    }
}

const postMessage = async (req, res) => {
    
    try {
        console.log(req.body);
        const message = await Message.create({
            text: req.body.text,
        });
        res.status(200);
        res.json(message);
    }
    catch (err) {
        res.json('There was an error sending the message: ' + err);
    }
}

const deleteMessage = async (req, res) => {
    try {
        const message = await Message.findByIdAndDelete(req.params.messageId);
        res.status(200);
        res.json(message);
    }
    catch (err) {
        res.json('There was an error deleting the message: ' + err);
    }

}

module.exports = {getMessage , getMessages, postMessage, deleteMessage};
