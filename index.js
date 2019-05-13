const express = require('express');
const colors = require('colors');
//start the server with express and seve in to a variable 
const server = express();

server.get('/', function(req, res) {
    res.send('<h1>Hola mundo desde express y node</h1>');
    res.end();
});
//defin in witch port the server will start 
server.listen(3000, function() {
    console.log('server on port 3000'.green);
});