const IChat = require('../../instachat.model/interfaces/IChat');
const ChatCollection = require('../database/schemas/Chat');

class ChatRepository extends IChat {

    constructor(){
        super();
    }

    async createChatRoom({ name, code, usersQt }){
        return await ChatCollection.create({
            name,
            code,
            usersQt
        })
    }

    async getChatRoom(chatcode){
        return await ChatCollection.findOne({ code: chatcode })
    }
}

module.exports = ChatRepository