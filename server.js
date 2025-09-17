const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static("public"));

const users = {};

io.on('connection', (socket) =>{
    console.log("User connected", socket.id);

    socket.on("registerUser", ({username}) => {
        users[username] = socket.id;
        socket.username = username;
        console.log(users);
    })

    socket.on("privateMessage", ({to, message}) => {
        const targetedUserId = users[to];
        if(targetedUserId){
            io.to(targetedUserId).emit("receivePrivateMessage", {
                from: socket.username,
                message
            })
        } 
    })

    socket.on("joinRoom", ({room, username}) => {
       socket.username = username;
       socket.join(room);
       console.log(`${username} joined room ${room}`);
    })


    socket.on("sendMessage", ({room, message}) => {
        io.to(room).emit("receiveMessage", {
            username: socket.username,
            message
        })
        console.log(`${socket.username} in ${room}: ${message}`)
    })

    socket.on('disconnect', () =>{
        console.log("User disconnected:", socket.id)
    })
})

server.listen(3000, () => {
    console.log('Server is running on port 3000');
})