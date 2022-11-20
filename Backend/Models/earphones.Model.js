const express = require('express');
const mongoose = require('mongoose');


const earPhoneSchema = mongoose.Schema({
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

const EarphonesModel = mongoose.model("earphone", earPhoneSchema);

module.exports = EarphonesModel;