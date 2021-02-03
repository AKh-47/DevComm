import { Socket } from "socket.io";
import User from "./models/User";
import { Room as IRoom } from "./config/types";
import Room from "./models/Room";

export default (socket: Socket, io: any) => {
  socket.on("join-room", async (roomID: string) => {
    try {
      console.log("eds");
      socket.join(roomID);
    } catch (err) {
      throw err;
    }
  });

  socket.on("leave-room", async (roomID: string) => {
    try {
      socket.leave(roomID);
    } catch (err) {
      throw err;
    }
  });

  socket.on(
    "send-message",
    async (roomID: string, userID: string, message: string) => {
      try {
        const user = await User.findById(userID).select("username");

        io.to(roomID).emit("recive-message", { user, message });
      } catch (err) {
        throw err;
      }
    }
  );
};
