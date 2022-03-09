const mongoose = require('mongoose')

const ChatSchema = new mongoose.Schema({

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

module.exports = mongoose.model('Chat', ChatSchema)