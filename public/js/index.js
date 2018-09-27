var socket = io();

socket.on('connect', function () {
    console.log('connected to the server');

    socket.emit('createMessage', {
        from: 'mammad',
        text: 'salam'
    });
});



socket.on('newMessage', function (message) {
    console.log('new message:', message);
});

socket.on('disconnect', function () {
    console.log('disconnected from server');
});