const { Server } = require("socket.io");
const io = new Server(5001, { /* options */ });

process.stdin.setEncoding('utf8');
process.stdin.setEncoding('utf8');

const out = process.stdout.write.bind(process.stdout);

io.on("connection", socket => {
    process.stdin.on('data', msg => socket.emit("msg", msg) );
    socket.on("msg", out);
});

