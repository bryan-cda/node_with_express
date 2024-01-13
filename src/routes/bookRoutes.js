import express from "express";
import bookController from "../controller/bookController";

const routes = express.Router();

routes.get("/books", bookController.listBooks);