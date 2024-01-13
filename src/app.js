import express from "express";
import connectOnDatabase from "./config/dbconnection.js";
import routes from "./routes/index.js";

const connection = await connectOnDatabase();
connection.on("error", (erro) => {
    console.error("connection error", erro)
});

connection.once("open", () => {
    console.log("success on connect database");
});

const app = express();
routes(app);

function findBookById(id){
    return books.findIndex(book => {
        return book.id === Number(id);
    })
};

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
