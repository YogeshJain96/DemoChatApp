let express = require('express')
let app = express();

let http = require('http');
let server = http.Server(app);

let socketIO = require('socket.io');
let io = socketIO(server);

const port = process.env.PORT || 3000;

// io.on('connection', (socket) => {
//     console.log('user connected');

//     // socket.on('new-message', (message) => {
//     //   console.log(message);
//     //   io.emit("getMessages",message);
//     //   console.log("Emmitted");
//     // });
// });
io.on('connection', (socket) => {
    socket.on('new-message', (msg) => {
        console.log(msg);
        io.emit('new-message', msg);
        console.log("Emmitted");
    })
});

server.listen(port, () => {
    console.log(`started on port: ${port}`);
});