const supertest = require('supertest')
const server = require('../../../instachat.api/Server')

const MOCK_CREATE_CHAT = {
    peopleQtd: 2,
    chatName: "Teste"
}

const baseURL = '/api/chatroom/'

describe('Right path', () => {
    
    describe('Create chat', function(){

        it('should return response with a status 200', async function(){
            const response = await supertest(server).post(`${baseURL}create_chat`).send(MOCK_CREATE_CHAT)
            expect(response.statusCode).toBe(200)
        })

        it('should have property code', async function(){
            const response = await supertest(server).post(`${baseURL}create_chat`).send(MOCK_CREATE_CHAT)
            expect(response.body).toHaveProperty('code')
        })
    });
    
    describe('Get chat', () => {

        it('should return response with a status 200', async function(){
            const response = await supertest(server).post(`${baseURL}get_chat_by_chatcode`).send()
            expect(response.statusCode).toBe(200)
        })

        it('should return response containing code and userQt properties', async function(){
            const response = await supertest(server).post(`${baseURL}get_chat_by_chatcode`).send()
            expect(response.body).toHaveProperty('code')
            expect(response.body).toHaveProperty('userQt')
        })
    })
});
