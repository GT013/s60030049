var http = require('http');
var fs = require('fs');
var path = require('path');
/*var express = require('express');
var app = express();
const router = express.Router();*/

http.createServer(function(req, res) {

    if (req.url === "/") {

        fs.readFile('profile.html', function(err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    } else if (req.url.match("\.css$")) {
        var cssPath = path.join(__dirname, req.url);
        var fileStream = fs.createReadStream(cssPath);
        res.writeHead(200, { "Content-Type": "text/css" });
        fileStream.pipe(res);
    } else if (req.url.match("\.jpg$")) {
        var jpgPath = path.join(__dirname, req.url);
        var fileStream = fs.createReadStream(jpgPath);
        res.writeHead(200, { "Content-Type": "image/jpg" });
        fileStream.pipe(res);
    } else if (req.url.match("\.png$")) {
        var pngPath = path.join(__dirname, req.url);
        var fileStream = fs.createReadStream(pngPath);
        res.writeHead(200, { "Content-Type": "image/png" });
        fileStream.pipe(res);
    } else if (req.url.match("\.webp$")) {
        var webpPath = path.join(__dirname, req.url);
        var fileStream = fs.createReadStream(webpPath);
        res.writeHead(200, { "Content-Type": "image/webp" });
        fileStream.pipe(res);
    } else if (req.url.match("\.gif$")) {
        var gifPath = path.join(__dirname, req.url);
        var fileStream = fs.createReadStream(gifPath);
        res.writeHead(200, { "Content-Type": "image/gif" });
        fileStream.pipe(res);
    }


}).listen(3011)