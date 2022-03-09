const { Router } = require('express')
const ChatController = require('../Controllers/ChatController')

const router = Router()

router.post('/create_chat', ChatController.createChat)
router.post('/get_chat_by_chatcode', ChatController.getChat)

module.exports = router