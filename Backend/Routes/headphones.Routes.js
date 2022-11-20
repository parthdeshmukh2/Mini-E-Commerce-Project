const express = require('express');

const HeadphonesModel = require('../Models/headphones.Model.js');

const HeadPhonesController = express.Router();

HeadPhonesController.get('/', async(req, res)=>{
    const result = await HeadphonesModel.find({});
    res.send(result);
})

HeadPhonesController.post('/post', async(req, res)=>{
    const body = req.body;
    const result = new HeadphonesModel(body);
    await result.save();
    res.send({messege:"Posted Successfully", result});
});

HeadPhonesController.get('/:id', async(req, res)=>{
    const {id} = req.params;
    const result =await  HeadphonesModel.findOne({_id:id});
    res.send(result)
})
module.exports= HeadPhonesController;