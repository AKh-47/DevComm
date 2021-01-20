import { Request, Response } from "express";
import Room from "../models/Room";

export const getAllRooms = async (req: Request, res: Response) => {
  //   const rooms = Room.find().select("name");
  res.status(200).json({});
};
