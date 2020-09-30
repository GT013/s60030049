var express = require('express');
var app = express();
var mongoose = require('mongoose');

/**app.get('/',(req, res) => {
    res.send({ping:'hello this is server and I am alive!'});
})**/

mongoose.connect('mongodb://localhost/mydatabase');
var db = mongoose.connection;

db.on('error', function callback () {
    console.log("Connection error");
  });
  
  db.once('open', function callback () {
    console.log("Mongo working!");
  });
  
app.listen(3011);
console.log('Listening on port 3011...');
