import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (socket) => {

    socket.on("message", (message) => {
        const parsedMessage = JSON.parse(message);
        if (parsedMessage.type === "join") {
            console.log("user joined room" + parsedMessage.payload.roomId);
            allSockets.push({
                socket,
                roomId: parsedMessage.payload.roomId
            })
        }

        if (parsedMessage.type === "chat") {
            console.log("user wants to chat");

            let currentUserRoom = null;
            for (let i = 0; i < allSockets.length; i++) {
                if (allSockets[i].socket === socket) {
                    currentUserRoom = allSockets[i].roomId;
                
                }
            })
        }

        for (let i = 0; i < allSockets.length; i++) {
            if(allSockets[i].roomId === currentUserRoom && allSockets[i].socket !== socket) {
                allSockets[i].socket.send(JSON.stringify({
                    type: "chat",
                    payload: {
                        message: parsedMessage.payload.message
                    }
                }))
            }
    }
})