import { Router } from "express";
import { login } from "../controllers/auth.controllers.js";
import { validateBasic } from "../security/basic/basic.js";
import { validateData } from "../middlewares/validator.middlewares.js";
import { loginObject } from "../validations/auth.validations.js";

const router = Router();

router.post("/login", validateBasic, validateData(loginObject), login);

export default router;
