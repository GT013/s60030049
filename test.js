var http = require('http');
var fs = require('fs');
var express = require('express');
var path = require('path');
extensions = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "application/javascript",
    ".png": "image/png",
    ".gif": "image/gif",
    ".jpg": "image/jpeg"
};

function getFile(filePath, res, page404, mimeType) {
    //does the requested file exist?
    fs.exists(filePath, function(exists) {
        //if it does...
        if (exists) {
            fs.readFile(filePath, function(err, contents) {
                if (!err) {

                    res.writeHead(200, {
                        "Content-type": mimeType,
                        "Content-Length": contents.length
                    });
                    res.end(contents);
                } else {
                    console.dir(err);
                };
            });
        } else {
            fs.readFile(page404, function(err, contents) {
                if (!err) {
                    res.writeHead(404, { 'Content-Type': 'text/html' });
                    res.end(contents);
                } else {
                    console.dir(err);
                };
            });
        };
    });
};

function requestHandler(req, res) {
    var
        fileName = path.basename(req.url) || 'index.html',
        ext = path.extname(fileName),
        localFolder = __dirname + '/public/',
        page404 = localFolder + '404.html';

    //do we support the requested file type?
    if (!extensions[ext]) {
        //for now just send a 404 and a short message
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end("&lt;html&gt;&lt;head&gt;&lt;/head&gt;&lt;body&gt;The requested file type is not supported&lt;/body&gt;&lt;/html&gt;");
    };

    //call our helper function
    //pass in the path to the file we want,
    //the response object, and the 404 page path
    //in case the requestd file is not found
    getFile((localFolder + fileName), res, page404, extensions[ext]);
};
//step 2) create the server
http.createServer(requestHandler).listen(3011);