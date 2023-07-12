import { Router } from "express";
import { profile } from "../controllers/user.controllers.js";
import { validateToken } from "../security/bearer/bearer.js";

const router = Router();

router.get("/profile", validateToken, profile);

export default router;
