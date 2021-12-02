const { Server } = require("socket.io");
const io = new Server(5001, { /* options */ });
io.on("connection", socket => {
    console.log("New connection created");
    socket.emit("msg", "Welcome message from server");
    socket.on("msg", msg => {
        console.log("Received message:", msg);
        socket.emit("msg", "Replyaing to message: " + msg);
    });
});

