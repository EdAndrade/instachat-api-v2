const supertest = require('supertest')
const assert = require('assert')
const server = require('../../../instachat.api/Server')

const MOCK_CREATE_CHAT = {
    peopleQtd: 2,
    chatName: "Teste"
} 

describe('Right path', () => {
    
    describe('Create chat', function(){

        it('should response with a status 200', async function(){
            const response = await supertest(server).post('/api/chatroom/create_chat').send(MOCK_CREATE_CHAT)
            assert.equal(response.statusCode, 200)
        })
    });

});
