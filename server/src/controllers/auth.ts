import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import User from "../models/User";

export const registerHandler = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    const exisitngUser = await User.findOne({ username });

    if (exisitngUser) {
      return res.status(500).json({
        message: "Username is already in use",
      });
    }

    const hashedPass = await bcrypt.hash(password, 10);

    await new User({
      username,
      password: hashedPass,
    }).save();

    res.status(200).json({
      message: "User Created",
      error: null,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: err.message,
      error: true,
    });
  }
};

export const loginHandler = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (!user) {
    return res.status(401).json({
      message: "Auth Failed",
      error: true,
    });
  }

  const check = await bcrypt.compare(password, user.password);

  if (!check) {
    return res.status(401).json({
      message: "Auth Failed",
      error: true,
    });
  }

  if (!process.env.SECRET) {
    throw new Error("Environment Invalid");
  }

  const token = jwt.sign(
    { id: user._id, name: user.name, email: user.email },
    process.env.SECRET
  );

  res.status(200).json({
    message: "Logged In",
    token,
    error: null,
    user: { ...user, password: null },
  });
};
