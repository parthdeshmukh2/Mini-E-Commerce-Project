const express = require('express');
const mongoose = require('mongoose');


const speakerSchema = mongoose.Schema({
    Title:String,
    Price: Number,
    StrikeOffPrice:Number,
    Discount:Number,
    Saving:Number,
    Category:String,
    Quantity:Number,
    Title2:String,
    Picture:String

});

const SpeakerModels = mongoose.model("speaker", speakerSchema);

module.exports = SpeakerModels;