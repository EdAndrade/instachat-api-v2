const repository = require('../../instachat.data/repository/ChatRepository');
const ChatRequest = require('../../instachat.model/entities/ChatRequest')

class ChatController {

    constructor(){
        this._repository = new repository()
        this.createChat = this.createChat.bind(this)
        this.getChat = this.createChat.bind(this)
    }

    createChat(request, response){

        const chatRequest = new ChatRequest(request.body)

        if(chatRequest.isValid()){

            const chatRoom = new ChatRoom({
                usersQt: chatRequest.peopleQtd,
                name: chatRequest.chatName,
                code: GenerateHash(`${new Date()}${ckey.SECRET_KEY}`)
            })

        }else{
            response.status(400)
        }

        this._repository.createChatRoom()
        return response.sendStatus(404)
    }

    getChat(request, response){
        this._repository.getChatRoom()
        return response.sendStatus(200)
    }
}

const chatController = new ChatController()
module.exports = chatController