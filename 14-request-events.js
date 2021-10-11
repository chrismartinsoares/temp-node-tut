const http = require('http');

// const server = http.createServer((req, res) => {
//    res.end('welcome')
//})

// Event Emitter API:
const server = http.createServer();

//Emit reques event
server.on('request', (res, req) => {
    req.end('welcome');
})

server.listen(5000)