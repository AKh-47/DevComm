//@ts-nocheck
window.navigator.userAgent = "react-native";

const io = require("socket.io-client/socket.io");

const socket = io("http://localhost:8000/", {
  transports: ["websocket"],
});

export default socket;
