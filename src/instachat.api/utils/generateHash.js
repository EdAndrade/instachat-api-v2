const crypto = require('crypto')

module.exports = ({stringToEncode}) => {
    return crypto.createHash('md5').update(stringToEncode).digest("hex")
}