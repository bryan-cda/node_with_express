import express from "express";
import bookController from "../controller/bookController.js";

const bookRoutes = express.Router();

bookRoutes.get("/books", bookController.listBooks);
bookRoutes.get("/books/:id", bookController.findBookById);
bookRoutes.post("/books", bookController.addBook);
bookRoutes.put("/books/:id", bookController.updateBook);
bookRoutes.delete("/books/:id", bookController.deleteBook);

export default bookRoutes;