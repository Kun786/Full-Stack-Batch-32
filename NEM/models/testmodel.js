const mongoose = require('mongoose');

const TestSchema = mongoose.Schema({
    Name:{type:String,required:true},
    Email:{type:String,unique:true},
    Age:{type:Number,required:true,integer: true},
    City:{type:String}
})


module.exports = mongoose.model('TestCollection', TestSchema);