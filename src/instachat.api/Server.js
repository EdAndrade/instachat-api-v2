const express = require('express');
const cors = require('cors');
const chatRoutes = require('./Routes/ChatRoutes');
const app = express();
const swaggerUI = require('swagger-ui-express');
const swaggerDocs = require('./Routes/SwaggerDoc.json');

app.use(cors());
app.use(express.json());
app.use('/api/chatroom', chatRoutes);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

module.exports = app;