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

// joining unique room url
app.get("/rooms/:roomId", (res, req) => {
  // res.render("student", {room:req.params.roomId});
  // res.send(`<h1>Hello room id ${req.params.roomId}</h1>`);
  consol.log(`Hello room id ${req.params.roomId}`)
})

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
		// sends room id back to client
		socket.emit('dispatchRoomId', roomId)
		joinRoom(socket, room)
	})

	// called when a user wants to join a room with specified room id
	socket.on('joinRoom', roomId => {
		var room = rooms[roomId]
		// todo: for testing, later say something like room does not exist... yet
		if (!room){ 
			room = {
				id: roomId,
				sockets: []
			}
			rooms[room.id] = room
		}
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
    console.log(rooms[room.id].sockets.join(' '))
  });
}

server.listen(PORT, () => {
	console.log(`Server is live on PORT:${PORT}`);
});

