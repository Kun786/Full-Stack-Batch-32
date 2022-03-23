const mongoose = require('mongoose');

const today = new Date();
const day = today.getDate();
const month = today.getMonth() + 1;
const year = today.getFullYear();
const time = today.getTime();


const UserModel = mongoose.Schema({
    Name:{type:String},
    Age:{type:Number},
    FatherDetails:{
        type:[{
            FatherName:{type:String},
            FatherAge:{type:Number}
        }]
    },
    CreatedDate: {
        type: String,
        default: `${year}-${month}-${day}-${time}`,
    }
},{timestamps:true});

module.exports =  mongoose.model('UserCluster',UserModel);