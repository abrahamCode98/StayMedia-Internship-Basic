import express from "express";
import internRoutes from "./routes/intern.routes.js";

const app = express();

app.use(express.json());

app.use("/api", internRoutes);

export default app;

