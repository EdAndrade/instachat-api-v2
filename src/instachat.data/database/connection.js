require('dotenv').config()
const DBConnection = require('mongoose')

try{
    DBConnection.connect(process.env.CONNECTION_STRING).then( () => {
        console.log('connected to mongo')
    }).catch( (error) => {
        console.log('couldnt connect to mongo', error) 
    })
}catch(error){
    console.log(error)
}

module.exports = { DBConnection }