// Here we import the functions from the controller that we want to use for each route.
const express = require('express');
const router = express.Router();
const { getMessages, getMessage, postMessage, deleteMessage } = require('../controllers/messageController.js');

router.get('/', getMessages);

router.get('/:messageId', getMessage);

router.post('/', postMessage);

router.delete('/:messageId', deleteMessage);

module.exports = router;