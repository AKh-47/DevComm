import { Request, Response } from "express";
import User from "../models/User";

export const getUserById = async (req: Request, res: Response) => {
  const id = req.params.id;
  const user = await User.findById(id);
  res.status(200).json({ ...user, password: null });
};
