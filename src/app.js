import express from "express";


const app = express();
app.use(express.json());


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

app.post("/books", (req, res) =>{
    books.push(req.body);
    res.status(201).send("book has been created.")
})

export default app;
