const DBConnection = require('mongoose')

DBConnection.connect(
    'mongodb+srv://MyMongoDBUser:dr1f6dcx@primeirocluster.3jeie.mongodb.net/instachatAPI?retryWrites=true&w=majority'
)

module.exports = { DBConnection }