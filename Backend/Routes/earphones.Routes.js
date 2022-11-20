const express = require('express');

const EarphonesModel = require('../Models/earphones.Model');

const EarphonesController = express.Router();

EarphonesController.get('/', async(req, res)=>{
    const result = await EarphonesModel.find({});
    res.send(result);
})

EarphonesController.post('/post', async(req, res)=>{
    const body = req.body;
    const result = new EarphonesModel(body);
    await result.save();
    res.send({messege:"Posted Successfully", result});
});

EarphonesController.get('/:id', async(req, res)=>{
    const {id} = req.params;
    const result =await  EarphonesModel.findOne({_id:id});
    res.send(result)
})
module.exports= EarphonesController;