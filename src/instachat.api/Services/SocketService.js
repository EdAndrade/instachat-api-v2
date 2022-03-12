const { WebSocketServer } = require('ws')
const repository = require('../../instachat.data/repository/ChatRepository')

class WebSocketService{

    constructor(){
        this.chatRooms = []
        this.startSocket(new WebSocketServer({port: 8081}))
        this.handleChatRooms = new HandleChatRooms(new repository())
    }

    startSocket(socket){

        socket.on("connection", async (ws, req) => {

            const urlConnection = req.url?.replace('/', '')
            const [chatCode, userName] = urlConnection.split('&')

            if(
                ( chatCode !== undefined || chatCode !== null ) &&
                this.handleChatRooms.chatRoomExists(chatCode)

            ){

                this.chatRooms = this.handleChatRooms.addNewUserToChatRoomBeingHandled({
                    chatRooms: this.chatRooms,
                    userName,
                    chatCode,
                    ws
                })

            }else{
                this.closeSocket(ws)
            }

            ws.on("message", message => {
                this.handleChatRooms.handleMessage({
                    message,
                    chatRooms: this.chatRooms
                })
            })
        })
    }

    closeSocket(Websocket){
        Websocket.send(JSON.stringify({ validChatRoom: false }))
        Websocket.terminate()
    }
}

class HandleChatRooms{

    constructor(repository){
        this._repository = repository
        this.chatRoomBeingHandled = null
    }

    chatRoomExists(chatCode){
        this.chatRoomBeingHandled = {
            success: true,
            message: '',
            data: {
                chatCode,
                usersQt: 2,
                name: 'Bomb in Angola'
            }
        }
        return true
    }

    addNewUserToChatRoomBeingHandled({userName, chatRooms, chatCode, ws}){

        if(this.isChatRoomUp(chatRooms) === false)
            chatRooms = this.UpChatRoom(chatRooms)

        chatRooms.forEach( chatRoom => {
            if(chatRoom.chatCode === chatCode){
                chatRoom.users.push({
                    ws,
                    userName
                });
            }
        });

        return chatRooms;
    }

    isChatRoomUp(chatRooms){

        let result = false
        chatRooms.forEach( chatRoom => {
            if(chatRoom.chatCode === this.chatRoomBeingHandled.data.chatCode){
                result = true
            }
        })

        return result
    }

    UpChatRoom(chatRooms){
        chatRooms.push({
            ...this.chatRoomBeingHandled.data,
            users: []
        })

        return chatRooms
    }

    formatMessage(message){

		let newData = "";

		for(let i = 0; i < message.length; i++){
			newData += String.fromCharCode(message[i]);
		}
		return JSON.parse(newData);
	}

    handleMessage({message, chatRooms}){

        message = this.formatMessage(message)
        if(message.code && message.message){
			this.sendMessage({message, chatRooms})
		}
    }

    sendMessage({message, chatRooms}){

        chatRooms.forEach( chatRoom => {
            console.log(chatRoom, message)
            if(chatRoom.chatCode === message.code){
                
                console.log(chatRoom,message)
                chatRoom.users.forEach( user => {
                    
                    if(user.isAlive === false)
                        user.ws.terminate();

                    user.ws.send(message.message);
                });
            }
        });
    }

    getChatRoom(chatCode){
        return true
    }
}

module.exports = WebSocketService