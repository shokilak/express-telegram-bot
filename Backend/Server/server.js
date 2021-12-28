//requiremants
const express = require('express');

//modules
const bot = require('../TelegramBot/botLauncher');
const createPath = require('./Helpers/createPath');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const __PORT = 3000;

//middlewares
app.use(express.static('../../Frontend/'))

//routing
app.get('/', (req, res) => {
    console.log('test');

    res.render('index');
});

//sockets
io.on('connection', (socket) => {
    console.log(socket.id);

    io.on('disconnection', (socket) => {
        console.log(socket.id);
    });


    socket.on('alert', () => {
        console.log('emit ready');
    })
});


server.listen(__PORT, () => {
    console.log(`Server started on ${__PORT} port`);
})