import { Socket } from "socket.io";
import User from "./models/User";
import { Room as IRoom } from "./config/types";
import Room from "./models/Room";

export default (socket: Socket, io: any) => {
  socket.on("join-room", async (roomID: string) => {
    try {
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
        console.log("lmao");

        const user = await User.findById(userID).select("username");

        const room = await Room.findByIdAndUpdate(
          roomID,
          {
            $push: {
              messages: {
                user: user._id,
                message,
              },
            },
          },
          {
            useFindAndModify: false,
            new: true,
          }
        ).populate("messages.user", "name");

        io.to(roomID).emit("recive-message", room);
      } catch (err) {
        throw err;
      }
    }
  );
};
