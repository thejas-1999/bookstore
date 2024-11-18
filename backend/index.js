import express from "express";
import mongoose from "mongoose";
import { PORT, MONGODBURI } from "./config.js";
import { Book } from "./models/bookModel.js";

const app = express();

app.use(express.json());

app.get("/", (request, response) => {
  console.log(request);
  return response.status(200).send("welcome");
});

app.post("/books", async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.author ||
      !request.body.price ||
      !request.body.publishedYear
    ) {
      return response.status(400).send({
        message: `Send all fields:title,author,price,published year`,
      });
    }
    const newBook = {
      title: request.body.title,
      author: request.body.author,
      price: request.body.price,
      publishedYear: request.body.publishedYear,
    };
    const book = await Book.create(newBook);

    return response.status(201).send(book);
  } catch (error) {
    console.log(error);
    response.status(500).send({ message: error.message });
  }
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
