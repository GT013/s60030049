var embedded = require('mongoose').model('embedded');
exports.render = function(req,res){
    res.render('index',{
        'title':'Hello Jade'
    });
};
exports.embedded = function(req,res){
    var emb = embedded.insertMany(req.body)
    res.json(emb)
}
