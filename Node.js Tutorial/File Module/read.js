//fs module
//allows to read, create, update, delete and rename file

var http = require('http');
var fs = require('fs');

//creating the server
http.createServer((req, res) => {
    //passing the html file to the return on call
    fs.readFile('file.html', (err, data) =>{
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write(data);
        res.end();
    })
}).listen(8080);


