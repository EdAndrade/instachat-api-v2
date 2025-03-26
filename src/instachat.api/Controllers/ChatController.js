const repository = require('../../instachat.data/repository/ChatRepository')
const ChatRequest = require('../../instachat.model/entities/ChatRequest')
const ChatRoom = require('../../instachat.model/entities/ChatRoom')
const GenerateHash = require('../utils/generateHash');
const { HandleChatRooms } = require('../Services/SocketService') 
require('dotenv').config()

class ChatController {

    constructor(){
        this._repository = new repository()
        this.handleChatRooms = new HandleChatRooms()
        this.createChat = this.createChat.bind(this)
        this.getChat = this.getChat.bind(this)
    }

    async createChat(request, response){

        const chatRequest = new ChatRequest(request.body)

        try{

            if(chatRequest.isValid().valid){

                const chatRoom = new ChatRoom({
                    usersQt: chatRequest.peopleQtd,
                    name: chatRequest.chatName,
                    code: GenerateHash({ 
                        stringToEncode: `${new Date()}${process.env.SECRETY_CHAT_CODE}`
                    })
                })
    
                const { code, name, usersQt } = await this._repository.createChatRoom(chatRoom)
    
                return response.status(200).json({
                    code, name, usersQt
                })
    
            }else{
                response.sendStatus(400)
            }
            
        }catch(error){
            return response.sendStatus(500)
        }
    }

    async getChat(request, response){
        const code = request.body.code
        const storedChatRoom = await this._repository.getChatRoom(code)

        if(!storedChatRoom){
            return response.status(200).json({ status: 404 })
        }
        
        const chatRooms = repository.getChatRoomsInMemory()
        console.log(chatRooms)
        const chatRoom = this.handleChatRooms.getChatRoomByCode({ chatRooms, code })

        if(chatRoom && !this.handleChatRooms.hasChatRoomEnoughtSpace({ chatRoom })){
            return response.status(200).json({ status: 403 })
        }

        return response.status(200).json(storedChatRoom)
    }
}

const chatController = new ChatController()
module.exports = chatController