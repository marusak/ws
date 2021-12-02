const { io } = require("socket.io-client");
const socket = io("https://experimment-route-front-door-ci.apps.ocp-c1.prod.psi.redhat.com");
// const socket = io("ws://localhost:5001");
socket.on("connect", () => {console.log("Connection established")});
socket.on("msg", console.log);

let counter = 0;

setInterval(() => {
    socket.emit("msg", "Message number " + counter);
    counter += 1;
}, 1000);
