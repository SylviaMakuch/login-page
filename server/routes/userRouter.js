import express from "express";
const router = express.Router();

import { signup } from "../controllers/user.js";

// router.post("/login", signin);
router.post("/signup", signup);

export default router;