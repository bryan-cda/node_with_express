import express from "express";
import connectOnDatabase from "./config/dbconnection.js";
import book from "./model/book.js";
import { model } from "mongoose";

const connection = await connectOnDatabase();
connection.on("error", (erro) => {
    console.error("connection error", erro)
});

connection.once("open", () => {
    console.log("success on connect database");
});

const app = express();
app.use(express.json());

const books = [{id: 1, title: "foo"}, {id: 2, title: "bar"}];

function findBookById(id){
    return books.findIndex(book => {
        return book.id === Number(id);
    })
};

app.get("/", (req, res) => {
    res.status(200).send("Welcome to Express");
});

app.get("/books", async (req, res) => {
    const books = await book.find({});
    res.status(200).json(books);
});

app.post("/books", (req, res) =>{
    books.push(req.body);
    res.status(201).send("book has been created.")
});

app.get("/books/:id", (req, res) => {
    const index =  findBookById(req.params.id);
    res.status(200).json(books[index]);
});

app.put("/books/:id", (req, res) => {
    const index =  findBookById(req.params.id);
    books[index].title = req.body.title;
    res.status(200).json(books);
});

app.delete("/books/:id", (req, res) => {
    const index = findBookById(req.params.id);
    books.splice(index, 1);
    res.status(204).send("Book deleted.")
});

export default app;
