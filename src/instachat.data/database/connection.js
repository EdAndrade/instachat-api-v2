require('dotenv').config()
const DBConnection = require('mongoose')

try{
    DBConnection.connect(process.env.CONNECTION_STRING)
}catch(error){
    console.log(error)
}

module.exports = { DBConnection }