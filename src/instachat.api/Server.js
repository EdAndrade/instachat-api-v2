const express = require('express');
const cors = require('cors');
const chatRoutes = require('./Routes/ChatRoutes');
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/chatroom', chatRoutes)

module.exports = app;