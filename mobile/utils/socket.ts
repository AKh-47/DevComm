//@ts-nocheck
import React from "react-native";
// window.navigator.userAgent = "react-native";

console.log(window.navigator.userAgent);

import io from "socket.io-client";

const socket = io("http://localhost:8000/", {
  transports: ["websocket"],
});

export default socket;
