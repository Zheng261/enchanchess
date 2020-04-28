var express = require('express');
var app = express();

const port = 8000	// server port
// var server = http.createServer(app);
var server = app.listen(port, () => {
  console.log(`listening on localhost:${port}`);
});
var io = require('socket.io')(server);

// server.get('/', (req, res) => {
//   res.send('<h1>Hello world</h1>');
// });

io.on('connection', (socket) => { 
	console.log("client connected")
	socket.on('test', test => {
		console.log("test worked!")
	})
	/* … */ 
});

const testAPI = socket => {
  const response = "hello world";
  // Emitting a new message. Will be consumed by the client
  socket.emit("test", response);
};

