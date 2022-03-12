const server = require('./Server');
const WebSocketService = require('./Services/SocketService')
new WebSocketService()

server.listen(8085, () => {
    console.log('SERVER RUNNING ================= ');
});