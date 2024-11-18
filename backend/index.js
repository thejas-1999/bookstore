import express from "express";
import mongoose from "mongoose";
import { PORT, MONGODBURI } from "./config.js";
import bookRouter from "./routes/bookRoute.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use("/api", bookRouter);

mongoose
  .connect(MONGODBURI)
  .then(() => {
    console.log("Database connected successfully");
    app.listen(PORT, () => {
      console.log(`app is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
