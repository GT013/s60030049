exports.render = function(req,res){
    res.render('index',{
        'title':'Hello Jade'
    });
};
exports.embedded = function(req,res){
    res.json(req)
}