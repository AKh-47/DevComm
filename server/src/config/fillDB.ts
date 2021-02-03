import Room from "../models/Room";
import { Room as IRoom } from "./types";

const rooms: IRoom[] = [
  {
    name: "React",
    image: "react.png",
  },
  {
    name: "Node.js",
    image: "node.js.png",
  },
  {
    name: "CSS",
    image: "css3.png",
  },
  {
    name: "Next.js",
    image: "next.js.png",
  },
];
export default async () => {
  rooms.forEach(async (room: IRoom) => {
    await new Room(room).save();
  });
};
