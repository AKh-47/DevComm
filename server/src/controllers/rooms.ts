import { Request, Response } from "express";
import Room from "../models/Room";

export const getAllRooms = async (req: Request, res: Response) => {
  const rooms = await Room.find();
  res.status(200).json(rooms);
};

export const getRoomByID = async (req: Request, res: Response) => {
  const { id } = req.params;
  const room = await Room.findById(id);

  res.status(200).json(room);
};
