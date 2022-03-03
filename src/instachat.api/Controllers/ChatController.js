const repository = require('../../instachat.data/repository/ChatRepository');

class ChatController {

    constructor(){
        this._repository = new repository()
        this.createChat = this.createChat.bind(this)
    }

    createChat(request, response){
        this._repository.createChatRoom()
        return response.sendStatus(200)
    }
}

const chatController = new ChatController()
module.exports = chatController