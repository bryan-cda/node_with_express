import http from "http";

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/plan"});
    res.end("Node.js with Express")
});

server.listen(3000, () => {
    console.log("server listening...")
});