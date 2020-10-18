const http = require("http");

const url = "127.0.0.1";

const port = 3000;

const express = require("express");

const app = express();

app.set("port", port)

app.use((req, resp, next) =>{
    resp.status(404).send("Page not found.");
});


const server = http.createServer(app);

server.listen(port, url, () =>{
    console.log("Server listening on: "+ `${url}:${port}`);
});
