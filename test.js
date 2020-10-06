var http = require('http');
var fs = require('fs');
var express = require('express');
var app = express();


http.createServer(function(req, res) {
    fs.readFile('profile.html', function(err, data) {

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        /* res.sendFile('/s60030049/bg.css');*/
        return res.end();
    });
}).listen(3011)