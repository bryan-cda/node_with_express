import http from "http";

const route = {
    "/":"welcome",
    "/foo": "foo",
    "/bar": "bar"
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/plan"});
    res.end(route[req.url])
});

server.listen(3000, () => {
    console.log("server listening...")
});