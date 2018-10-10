const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const {generateMessage, generateLocationMessage} = require('./utils/message');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

io.on('connection', (socket) => {
    console.log('new user connected');

    socket.emit('newMessage', generateMessage('From admin', 'Welcome to the chat'));
    socket.broadcast.emit('newMessage', generateMessage('From admin', 'New user joined to the chat'));    

    socket.on('createMessage', (message, callback) => {
        console.log('created message:', message);

        io.emit('newMessage', generateMessage(message.from, message.text));
        callback();
    });

    socket.on('createLocationMessage', (location) => {
        io.emit('newLocationMessage', generateLocationMessage('User', location.latitude, location.longitude));
    });

    socket.on('disconnect', () => {
        console.log('client disconnected');
    });
});

app.use(express.static(publicPath));

server.listen(3000, () => {
    console.log(`server is up on ${port}`);
});
