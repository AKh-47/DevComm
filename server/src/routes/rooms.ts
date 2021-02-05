import express from "express";
const router = express.Router();
import { getAllRooms, getRoomByID } from "../controllers/rooms";

router.get("/", getAllRooms);
router.get("/:id", getRoomByID);

export default router;
