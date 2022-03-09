const { DBConnection } = require('../connection.js')

const ChatSchema = new DBConnection.Schema({

    usersQt: {
        type: String,
        required: true
    },

    code: {
        type: String,
        required: true,
    },

    name: {
        type: String,
        required: true
    }
})

module.exports = DBConnection.model('Chat', ChatSchema)