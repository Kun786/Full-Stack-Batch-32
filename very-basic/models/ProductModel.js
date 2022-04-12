const mongoose = require('mongoose');

const today = new Date();
const day = today.getDate();
const month = today.getMonth() + 1;
const year = today.getFullYear();
const time = today.getTime();


const ProductModel = mongoose.Schema({
    ProductName:{type:String},
    ProductAge:{type:Number},
    ProductCompany:{type:String},
    CreatedDate: {
        type: String,
        default: `${year}-${month}-${day}-${time}`,
    }
},{timestamps:true});

module.exports =  mongoose.model('ProductCluster',ProductModel);