var express = require('express');
var app = express();

var render = function(req,res){
    res.send('Hello Worls');
};

app.get('/',render);

app.listen(3011);
console.log('Server run...');

module.exports = app;