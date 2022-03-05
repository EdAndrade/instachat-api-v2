const swaggerJsDoc = require('swagger-jsdoc');

const swaggerOptions = {

    swaggerDefinition: {
        info: {
            title: 'Instachat API v1',
            description: 'Documentation for instachat REST API',
            contact: {
                name: 'Teste'
            },
            servers: ["http://localhost:8085"]
        }
    },

    apis: ["Startup.js"]
}

const swaggerDocs = swaggerJsDoc(swaggerOptions);
module.exports = swaggerDocs;