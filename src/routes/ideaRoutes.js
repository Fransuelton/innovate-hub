import { Router } from "express";
import { createIdea } from "../controllers/ideaController.js";

const router = Router();

router.post("/ideas", createIdea);

export default router;
