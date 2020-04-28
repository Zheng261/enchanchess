var express = require('express');
var app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server);

const uuidv4 = require('uuid/v4');

const PORT = 8000	// server port

const rooms = {}

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

io.on('connection', (socket) => { 
	console.log("client connected")
	socket.on('test', test => {
		console.log("test worked!")
	})
	
	// called when a user wants to create a new room
	socket.on('createRoom', () => {
		const id = uuidv4()
		const [ roomId ] = id.split('-').slice(-1)

		const room = {
			id: roomId,
			sockets: []
		}
		rooms[room.id] = room
		joinRoom(socket, room)
	})
});

const testAPI = socket => {
  const response = "hello world";
  // Emitting a new message. Will be consumed by the client
  socket.emit("test", response);
};

/**
 * connects a socket to a specified room
 * @param {object} [socket] [a connected socket]
 * @param {object} [room] [object representing a room]
 */
const joinRoom = (socket, room) => {
 	room.sockets.push(socket);
  socket.join(room.id, () => {
    // store the room id in the socket for future use
    socket.roomId = room.id;
    console.log(`player ${socket.id} joined room ${room.id}`);
  });
}

server.listen(PORT, () => {
	console.log(`Server is live on PORT:${PORT}`);
});

