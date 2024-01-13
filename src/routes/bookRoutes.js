import express from "express";
import bookController from "../controller/bookController.js";

const bookRoutes = express.Router();

bookRoutes.get("/books", bookController.listBooks);
bookRoutes.get("/books/:id", bookController.findBookById);
bookRoutes.post("/books", bookController.addBook);
bookRoutes.put("/books", bookController.updateBook);

export default bookRoutes;