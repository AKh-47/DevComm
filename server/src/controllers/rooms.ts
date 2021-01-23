import { Request, Response } from "express";
import Room from "../models/Room";

export const getAllRooms = async (req: Request, res: Response) => {
  const rooms = [
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
  res.status(200).json(rooms);
};

export const getRoomByID = async (req: Request, res: Response) => {
  const { id } = req.params;
};
