import express from "express";
import mongoose from "mongoose";
import { PORT, MONGODBURI } from "./config.js";
import { Book } from "./models/bookModel.js";

const app = express();

app.use(express.json());

//add a book
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

//view all books
app.get("/books", async (request, response) => {
  try {
    const books = await Book.find({});
    response.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    console.log(error);
    response.status(500).send({ message: error.message });
  }
});

//view one book
app.get("/books/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const book = await Book.findById(id);
    response.status(200).json(book);
  } catch (error) {
    console.log(error);
    response.status(500).send({ message: error.message });
  }
});

//update the individual book
app.put("/books/:id", async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.author ||
      !request.body.price ||
      !request.body.publishedYear
    ) {
      return response.status(400).send({
        message: `send all the fields:title,author,price,publishedYear`,
      });
    }
    const { id } = request.params;
    const result = await Book.findByIdAndUpdate(id, request.body);

    if (!result) {
      response.status(404).send({ message: `Book is not found` });
    }
    return response.status(200).send({ message: `Updated Successfully` });
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
