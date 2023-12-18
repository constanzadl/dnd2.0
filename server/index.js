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

server.listen(3001, () => {console.log('port connected to 3001')});
