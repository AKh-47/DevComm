import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/db";

import roomRoutes from "./routes/rooms";

const socketio = require("socket.io");
import { Socket } from "socket.io";
import socketHandler from "./socket";

const app = express();
dotenv.config();
app.use(cors());
connectDB();

app.use(express.static("public"));
app.use("/rooms", roomRoutes);

const httpServer = app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}...`)
);

const io = socketio(httpServer, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket: Socket) => socketHandler(socket, io));
