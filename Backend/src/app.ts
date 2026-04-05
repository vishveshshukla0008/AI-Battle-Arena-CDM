import express from "express";
import cors from "cors";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes.js";
import battleRoutes from "./routes/battle.routes.js";
import { ErrorMiddleware } from "./middlewares/error.middleware.js";

export const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.use(express.json());
app.use(morgan("dev"));

app.use("/api/auth", authRoutes);
app.use("/api/battle", battleRoutes);

app.use(ErrorMiddleware);
