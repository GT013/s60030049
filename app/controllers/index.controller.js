require('../models/embedded.model');
var embedded = require('mongoose').model('embedded');
exports.render = function(req,res){
    embedded.find({},(err,resp)=>{
        if(!err){
            res.render('embedded',{
                'title':'Hello Jade',
                'embedded':resp
            });         
        }
    })
};
exports.embedded = function(req,res){
    var emb = embedded.insertMany(req.body)
    res.json(emb)
}
exports.getData=(req,res,next)=>{
    embedded.find({},function(err,data){
        if(err){
            return next(err);
        } else {
            res.json(data);
        }
       
    })
}
