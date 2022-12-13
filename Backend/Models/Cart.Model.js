const express = require('express');
const mongoose = require('mongoose');


const cartSchema = mongoose.Schema({
    Title:String,
    Price: Number,
    StrikeOffPrice:Number,
    Discount:Number,
    Saving:Number,
    Category:String,
    Quantity:Number,
    Title2:String,
    Picture:String,
    userId:String

});

const cartModel = mongoose.model("cart", cartSchema);

module.exports = cartModel;