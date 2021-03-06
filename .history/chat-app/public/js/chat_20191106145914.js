const socket = io();

socket.on('countUpdated', count => {
  console.log('The count has been updated!', count);
});

document.querySelector('#increment').addEventListener('click', () => {
  console.log('clicked');
  socket.emit('increment');
});

socket.on('welcomeMessageToClient', welcomeMessageFromServer => {
  console.log('Message from Server: ', welcomeMessageFromServer);
});

document.querySelector('#btnWelcomeMessage').addEventListener('click', () => {
  console.log('Message from client: ', 'Hello server');
  socket.emit('btnWelcomeMessage');
});
