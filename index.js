const express = require("express")
const app = express()

var port = 8082
app.get("/app-node/:user/:password/:age", function(req, res){
    res.send(req.params);
});

app.get("/college", function(req, res){
    res.sendFile(__dirname+"/pages/hello.html");
});

app.get("/about", function(req, res){
    res.send("We are a software builder.");
});

app.get("/contact", function(req, res){
    res.send("WhatsApp: (21) 999091-7198");
});

function message(msg){
    console.log(msg);
}
app.listen(port, message(
    'Server is open listening on port: ' + port
    )
)