class ChatRoom {

    constructor({ usersQt, code, name }){
        this.usersQt = usersQt
        this.code = code
        this.name = name
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