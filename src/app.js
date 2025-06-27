import express from "express";
import ideaRoutes from "./routes/ideaRoutes.js";

const app = express();

app.use(express.json());
app.use(ideaRoutes);

export default app;
