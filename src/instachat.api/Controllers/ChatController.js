const repository = require('../../instachat.data/repository/ChatRepository');

class ChatController {

    createChat(request, response){
        repository.createChatRoom();
    }
}