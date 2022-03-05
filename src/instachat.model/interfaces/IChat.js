class NotImplementedException extends Error {

    constructor(props) {
        super("Not Implemented Exception");  
    } 
}

class IChat {

    createChatRoom(){
        throw new NotImplementedException();
    }

    getChatRoom(){
        throw new NotImplementedException();
    }
}

module.exports = IChat;