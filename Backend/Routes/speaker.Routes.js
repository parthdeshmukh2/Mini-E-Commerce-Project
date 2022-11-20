const express = require('express');

const SpeakerModel = require('../Models/speaker.Model')

const SpeakerController = express.Router();

SpeakerController.get('/', async(req, res)=>{
    const result = await SpeakerModel.find({});
    res.send(result);
})

SpeakerController.post('/post', async(req, res)=>{
    const body = req.body;
    const result = new SpeakerModel(body);
    await result.save();
    res.send({messege:"Posted Successfully", result});
});

SpeakerController.get('/:id', async(req, res)=>{
    const {id} = req.params;
    const result =await  SpeakerModel.findOne({_id:id});
    res.send(result)
})
module.exports= SpeakerController;