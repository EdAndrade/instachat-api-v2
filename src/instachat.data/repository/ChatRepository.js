const IChat = require('../../instachat.model/interfaces/IChat');
const db = require('../database/connection');

class ChatRepository extends IChat {

    constructor(){
        super();
    }

    createChatRoom(){
        
    }

    getChatRoom(){
        
    }
}

module.exports = ChatRepository;