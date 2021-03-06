const express = require('express');
const http = require('http');
const path = require('path');
const socketio = require('socket.io');

const app = express();

const server = http.createServer(app);
const io = socketio();
const PORT = process.env.PORT || 3000;

const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath));

server.listen(PORT, () => {
  console.log('Server is listening on port ' + PORT + '...');
});
