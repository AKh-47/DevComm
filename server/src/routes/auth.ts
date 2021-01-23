import express from "express";
const router = express.Router();
import { registerHandler, loginHandler } from "../controllers/auth";

router.post("/register", registerHandler);
router.post("/login", loginHandler);

export default router;
