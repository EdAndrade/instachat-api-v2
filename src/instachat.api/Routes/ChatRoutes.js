const { Router } = require('express');
const ChatController = require('../Controllers/ChatController');

const router = Router();
const chatController = new ChatController();

router.post('/create_chat', chatController.createChat);

module.exports = router;