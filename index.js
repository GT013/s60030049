var express = require('express');
var app = express();
var mongoose = require('mongoose');

app.get('/',(req, res) => {
    res.send({ping:'hello this is server and I am alive!'});
})
app.listen(3011);

