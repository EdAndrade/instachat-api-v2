require('dotenv').config()
const DBConnection = require('mongoose')

DBConnection.connect(process.env.CONNECTION_STRING)

module.exports = { DBConnection }