const mongoose=require('mongoose');
const bodyParser = require('body-parser');
const Event=require('./Events');
const cors=require('cors');
const Events = require('./Events');

mongoose.connect('mongodb+srv://AkshatGajjar:Akshatgajjar2112@cluster0.qpubusm.mongodb.net/',{useNewUrlParser:true})
.then(()=>{
    console.log("connected To Mongoodb altls");

    const express = require('express');
    const app = express();
    app.use(bodyParser.urlencoded({extended:false}))
    app.use(cors());

    app.get('/Event',async(req,res)=>{
        const userData = await Event.find();
        res.send(userData)
       })
    app.get('/Event/:id',async(req,res)=>{
        eventData = await Event.findOne({id:req.params.id});
        res.send(eventData);
    })

    app.listen(1678,()=>{
        console.log("Server Started"); 
    })
})