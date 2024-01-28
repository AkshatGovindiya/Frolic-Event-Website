const { Module } = require('module');
const mongoose=require('mongoose');

const schema=mongoose.Schema({
     _id: Number,
     Title: String,
     Image:String,
    HostName:String,
    Category:String,
    DateTime:String,    
    Location:String,
    AddressLink:String,
    Description:String,
    Speaker1Name:String,
    Speaker1Img:String,
    Speaker2Name:String,
    Speaker2Img:String,
    Speaker3Name:String,
    Speaker3Img:String,
});

module.exports=mongoose.model ('Event',schema);

