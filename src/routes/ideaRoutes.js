import { Router } from "express";
import { createIdea, getIdeas } from "../controllers/ideaController.js";

const router = Router();

router.post("/ideas", createIdea);

router.get("/ideas", getIdeas);

export default router;
