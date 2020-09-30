var express = require('express');
var app = express();

app.get('/s60030049', function(req, res) {
    res.send({ping:'hello this is server and I am alive!'});
})

app.get('/s60030049/:id', function(req, res) {
    res.send({ping:'hello this is server and I am got '+req.params.id});
});

app.listen(3011);
console.log('Listening on port 3011...');
