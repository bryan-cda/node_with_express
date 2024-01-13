import express from "express";
import bookController from "../controller/bookController.js";

const bookRoutes = express.Router();

bookRoutes.get("/books", bookController.listBooks);

export default bookRoutes;