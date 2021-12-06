const { io } = require("socket.io-client");
//const socket = io("https://experimment-route-front-door-ci.apps.ocp-c1.prod.psi.redhat.com");
 const socket = io("ws://localhost:5001");

process.stdin.setEncoding('utf8');
process.stdin.setEncoding('utf8');

process.stdin.on('data', msg => socket.emit("msg", msg));
socket.on("msg", process.stdout.write);

