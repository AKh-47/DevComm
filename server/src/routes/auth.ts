import express from "express";
const router = express.Router();
import { registerHandler, loginHandler } from "../controllers/auth";

router.get("/register", registerHandler);
router.get("/login", loginHandler);

export default router;
