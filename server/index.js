const express = require('express');
const app = express();
const path = require ('path');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    },
});



app.use(express.static(path.resolve('')));

app.get('/', (req, res) => {
    return res.sendFile('index.html');
})

let game = 0;
let roomNum = 1;
let P1 = '';
let P2 = '';



io.on("connection", (socket) => {

    socket.on("join_game", (data) => {
        console.log('sup')
        if (P1 == '') {
            P1 = data;
        }
        else {
            P2 = data;
        }
        socket.join(roomNum);
        console.log('room joined: ', roomNum);

        console.log('Number of people: ',game)
        console.log('Number of room: ', roomNum)
        console.log('Player 1: ', P1)
        console.log('Player 2: ', P2)

        game++;

        if (game > 1) {
            socket.emit("room_welcome", {roomFull: true, roomNum, opponent: P2})
            game = 0;
            roomNum++;
            P1 = '';
            P2 = '';
        }
    })



    //send data to everyone but yourself
    //socket.broadcast.emit("event_name", data)
})

server.listen(3001, () => {console.log('port connected to 3001')});


