var server = require('http')

var port = 8081

var welcome_message = "Welcome to my web page."

server.createServer(function(req, res){
    res.end(welcome_message)
}).listen(port);

console.log('Server is up listening in port ' + port)