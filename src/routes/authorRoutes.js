import express from "express";
import authorController from "../controller/authorController.js";

const authorRoutes = express.Router();

authorRoutes.get("/authors", authorController.listAuthors);
authorRoutes.get("/authors/:id", authorController.findAuthorById);
authorRoutes.post("/authors", authorController.addAuthor);
authorRoutes.put("/authors/:id", authorController.updateAuthor);
authorRoutes.delete("/authors/:id", authorController.deleteAuthor);

export default authorRoutes;