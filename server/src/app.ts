import express from "express";
import cors from "cors";
import compressRoute from "./routes/compressRoute";

export const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/api", compressRoute);
