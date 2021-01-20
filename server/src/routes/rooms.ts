import express from "express";
const router = express.Router();
import { getAllRooms } from "../controllers/rooms";

router.get("/", getAllRooms);

export default router;
