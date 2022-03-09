const DBConnection = require('mongoose')

DBConnection.connect(
    'mongodb+srv://MyMongoDBUser:<mongodbdr1f6dcx>@primeirocluster.3jeie.mongodb.net/PrimeiroCluster?retryWrites=true&w=majority'
)

module.exports = { DBConnection }