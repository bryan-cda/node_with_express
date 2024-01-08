import express from "express";
const app = express();

const books = [
    {
        id: 1,
        title: "foo"
    },
    {
        id: 2,
        title: "bar"
    }
];

app.get("/", (req, res) => {
    res.status(200).send("Welcome to Express");
});

app.get("/books", (req, res) => {
    res.status(200).json(books);
});

export default app;
