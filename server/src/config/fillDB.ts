import Room from "../models/Room";
import { Room as RoomType } from "./types";

const rooms: RoomType[] = [
  {
    name: "React",
    image: "react.png",
  },
  {
    name: "Node.js",
    image: "node.js.png",
  },
];

export default async () => {
  rooms.forEach(async (room: RoomType) => {
    await new Room(room);
  });
};
