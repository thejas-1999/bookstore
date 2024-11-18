import express from "express";
import mongoose from "mongoose";
import { PORT, MONGODBURI } from "./config.js";

const app = express();

app.get("/", (request, response) => {
  console.log(request);
  return response.status(200).send("welcome");
});

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
