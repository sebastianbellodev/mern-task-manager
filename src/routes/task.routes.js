import { Router } from "express";
import {
  getTask,
  getTasks,
  postTask,
  deleteTask,
  putTask,
} from "../controllers/task.controllers.js";
import { validateToken } from "../security/bearer/bearer.js";

const router = Router();

router.get("/tasks", validateToken, getTasks);
router.get("/tasks/:id", validateToken, getTask);
router.post("/tasks", validateToken, postTask);
router.delete("/tasks:/id", validateToken, deleteTask);
router.put("/tasks:/id", validateToken, putTask);

export default router;
