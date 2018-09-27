const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

io.on('connection', (socket) => {
    console.log('new user connected');

    socket.emit('newMessage', {
        from: 'amirhossein1908',
        text: 'salam rofagha',
        createdAt: new Date().getTime()
    });

    socket.on('createMessage', (message) => {
        console.log('created message:', message);
    })

    socket.on('disconnect', () => {
        console.log('client disconnected');
    });
});

app.use(express.static(publicPath));

server.listen(3000, () => {
    console.log(`server is up on ${port}`);
});
