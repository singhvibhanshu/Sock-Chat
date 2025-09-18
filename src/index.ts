import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

let usersCount = 0;

wss.on("connection", (socket) => {
    usersCount += 1;
    console.log("user connected #" + usersCount);

    socket.on("message", (message) => {
        console.log("message received: " + message);
    })
})