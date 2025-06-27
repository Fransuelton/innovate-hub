import express from "express";
import ideaRoutes from "./routes/ideaRoutes.js";
import cors from "cors"

const app = express();

app.use(cors())
app.use(express.json());
app.use(ideaRoutes);

export default app;
