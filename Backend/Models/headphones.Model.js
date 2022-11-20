const express = require('express');
const mongoose = require('mongoose');


const headPhonesSchema = mongoose.Schema({
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

const HeadphonesModel = mongoose.model("headphone", headPhonesSchema);

module.exports = HeadphonesModel;