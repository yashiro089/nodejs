const express = require('express');
const http = require('http');
const path = require('path');
const socketio = require('socket.io');
const Filter = require('bad-words');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const PORT = process.env.PORT || 3000;
const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath));

let count = 0;
let welcomeMessageFromServer = 'Welcome to new users';

io.on('connection', socket => {
  console.log('New Websocket Connection');

  socket.emit('message', {
    text: 'Welcome',
    createdAt: new Date().getTime()
  });

  socket.broadcast.emit('message', 'a new user has joined!');

  socket.on('sendMessage', (message, callback) => {
    const filter = new Filter();
    if (filter.isProfane(message)) {
      return callback('Profanity is not allowed!');
    }

    io.emit('message', message);
    callback('Delivered!');
  });

  socket.on('disconnect', () => {
    io.emit('message', 'A user has left!');
  });

  socket.on('sendLocation', (coords, callback) => {
    io.emit(
      'locationMessage',
      `https://google.com/maps?q=${coords.latitude},${coords.longitude}`
    );

    callback();
  });
});

server.listen(PORT, () => {
  console.log('Server is listening on port ' + PORT + '...');
});
