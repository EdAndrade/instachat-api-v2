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

    async createChat(request, response){

        const chatRequest = new ChatRequest(request.body)

        if(chatRequest.isValid().valid){

            const chatRoom = new ChatRoom({
                usersQt: chatRequest.peopleQtd,
                name: chatRequest.chatName,
                code: GenerateHash({ stringToEncode: `${new Date()}` })
            })

            const data = await this._repository.createChatRoom(chatRoom)

            return response.status(200).json({
                ...chatRoom
            })

        }else{
            response.sendStatus(400)
        }
    }

    getChat(request, response){
        const data = this._repository.getChatRoom()
        console.log('me')
        return response.status(200).json(data)
    }
}

const chatController = new ChatController()
module.exports = chatController