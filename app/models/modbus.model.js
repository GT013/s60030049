var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var modbusembedded=new Schema({
    temperature: Number,
    humidity: Number,
    datetime: String
});

mongoose.model('modbus',modbusembedded);