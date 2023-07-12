import { Router } from "express";
import { signup, login, logout } from "../controllers/auth.controllers.js";
import { validateBasic } from "../security/basic/basic.js";
import { validateData } from "../middlewares/validator.middlewares.js";
import { loginObject } from "../validations/auth.validations.js";

const router = Router();

router.post("/signup", validateBasic, signup);

router.post("/login", validateBasic, login);

router.post("/logout", validateBasic, logout);

export default router;
