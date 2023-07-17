import { Router } from "express";
import {
  signup,
  login,
  logout,
  verifyToken,
} from "../controllers/auth.controllers.js";
import { validateBasic } from "../security/basic/basic.js";
import { validateSchema } from "../middlewares/validator.middlewares.js";
import { signupSchema, loginSchema } from "../schemas/auth.schemas.js";

const router = Router();

router.post("/signup", validateBasic, validateSchema(signupSchema), signup);

router.post("/login", validateBasic, validateSchema(loginSchema), login);

router.post("/logout", validateBasic, logout);

router.get("/verify", verifyToken);

export default router;
