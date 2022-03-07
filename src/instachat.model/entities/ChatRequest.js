class Chat {

    constructor({ chatName, peopleQtd }){
        this.chatName = chatName
        this.peopleQtd = peopleQtd
    }

    isValid(){
        const propertiesNames = Object.getOwnPropertyNames(this);
        const invalidProperties = propertiesNames.map( propertyName => {
            return this[propertyName] === null
        })

        return {
            valid: invalidProperties.length !== 0,
            error: invalidProperties.length === 0 ? '' : 'Invalid entity property passed'
        }
    }
}

module.exports = Chat