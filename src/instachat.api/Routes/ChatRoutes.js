const { Router } = require('express')
const ChatController = require('../Controllers/ChatController')

const router = Router()

router.post('/create_chat', ChatController.createChat)
router.get('/get_chat', ChatController.getChat)

module.exports = router