const IChat = require('../../instachat.model/interfaces/IChat');
const ChatCollection = require('../database/schemas/Chat');

class ChatRepository extends IChat {

    static chatRoomInMemory = [];

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

    static getChatRoomsInMemory(){
        return this.chatRoomInMemory;
    }
}

module.exports = ChatRepository