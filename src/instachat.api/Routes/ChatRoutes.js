const { Router } = require('express');
const ChatController = require('../Controllers/ChatController');

const router = Router();
router.post('/create_chat', ChatController.createChat);

module.exports = router;