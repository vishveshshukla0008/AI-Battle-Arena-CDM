import express from "express";
import cors from "cors";
import useGraph from "./ai/graph.ai.service.js";
import morgan from "morgan";

export const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.use(express.json());
app.use(morgan("dev"));


app.post("/api/use-graph", async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res
      .status(400)
      .json({ success: false, message: "Prompt is required" });
  }

  let result = await useGraph(prompt);

  return res.json(result);
});
