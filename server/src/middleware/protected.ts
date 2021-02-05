import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { User } from "../config/types";

interface Req extends Request {
  user: any;
}

export default (req: Req, res: Response, next: NextFunction) => {
  try {
    if (!process.env.JWT_KEY) {
      throw new Error("Environment Invalid");
    }

    const token = req.headers.authorization?.split(" ")[1] || "";
    const decoded = jwt.verify(token, process.env.JWT_KEY);

    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({
      message: "Auth Failed",
    });
  }
};
