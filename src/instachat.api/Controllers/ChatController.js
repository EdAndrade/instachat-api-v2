const repository = require('../../instachat.data/repository/ChatRepository')
const ChatRequest = require('../../instachat.model/entities/ChatRequest')
const ChatRoom = require('../../instachat.model/entities/ChatRoom')
const GenerateHash = require('../utils/generateHash');

class ChatController {

    constructor(){
        this._repository = new repository()
        this.createChat = this.createChat.bind(this)
        this.getChat = this.getChat.bind(this)
    }

    createChat(request, response){

        const chatRequest = new ChatRequest(request.body)

        if(chatRequest.isValid().valid){

            const chatRoom = new ChatRoom({
                usersQt: chatRequest.peopleQtd,
                name: chatRequest.chatName,
                code: GenerateHash({ stringToEncode: `${new Date()}` })
            })

            return response.status(200).json({
                ...chatRoom
            })

        }else{
            response.sendStatus(400)
        }

        this._repository.createChatRoom()
    }

    getChat(request, response){
        this._repository.getChatRoom()
        console.log('me')
        return response.sendStatus(200)
    }
}

const chatController = new ChatController()
module.exports = chatController