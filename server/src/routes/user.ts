import express from "express";
const router = express.Router();
import { getUserById } from "../controllers/user";

router.post("/:id", getUserById);

export default router;
