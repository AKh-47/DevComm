import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/db";
import fillDB from "./config/fillDB";

import roomRoutes from "./routes/rooms";
import authRoutes from "./routes/auth";
import userRoutes from "./routes/user";

const socketio = require("socket.io");
import { Socket } from "socket.io";
import socketHandler from "./socket";

const app = express();
dotenv.config();
app.use(cors());
connectDB();
fillDB();

app.use(express.static("src/public"));
app.use(express.json());
app.use("/rooms", roomRoutes);
app.use("/auth", authRoutes);
app.use("/user", userRoutes);

const httpServer = app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}...`)
);

const io = socketio(httpServer, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket: Socket) => socketHandler(socket, io));

//FUTURE PLANS
//Private Messages
//Private Groups
//Friends System
