//SIMPLE NODE.JS APP 


var http = require('http'); //uses http module to createServer

http.createServer((req,res)=>{
    //returns text/html content as a response
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    //returns this content
    res.end('Hello World');
}).listen(8080)

console.log('Visit the link http://localhost:8080 to run this server');
