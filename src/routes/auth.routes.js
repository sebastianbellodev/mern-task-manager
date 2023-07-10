import { Router } from "express";
import { login } from "../controllers/auth.controllers.js";
import { validate } from "../auth/basic/basic.js";
validate;
import { validateData } from "../middlewares/validator.middlewares.js";
import { loginObject } from "../data/validations/auth.validations.js";

const router = Router();

router.post("/login", validate, validateData(loginObject), login);

export default router;
