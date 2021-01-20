// @ts-nocheck
import { Socket } from "socket.io";

export default (socket: Socket, io: any) => {
  socket.on("join-room", async (roomID: string) => {
    try {
    } catch (err) {
      throw err;
    }
  });

  socket.on("leave-room", async (userID: string, roomID: string) => {
    try {
    } catch (err) {
      throw err;
    }
  });

  socket.on("send-message", async (roomID: string) => {
    try {
    } catch (err) {
      throw err;
    }
  });
};
