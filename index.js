var express = require('express');
var app = express();

app.get('/ping',function(req, res) {
    res.send({ping:'hello this is server and I am alive!'});
})
app.listen(3011);
console.log('Listening on port 3011...');
