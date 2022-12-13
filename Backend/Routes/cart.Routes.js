const express = require('express');
const CartModel = require('../Models/Cart.Model');

const CartController = express.Router();


CartController.get('/', async(req, res)=>{
    const {userId} = req.body;
    const result = await CartModel.find({userId});
    res.send(result);
})

CartController.post('/post', async(req, res)=>{
    const body = req.body;
    const {userId} = req.body;
    const result = new CartModel({Title:body.Title, Price: body.Price,
        StrikeOffPrice:body.StrikeOffPrice,
        Discount:body.Discount,
        Saving:body.Saving,
        Category:body.Category,
        Quantity:body.Quantity,
        Title2:body.Title2,
        Picture:body.Picture, 
        userId:userId});
    await result.save();
    res.send({messege:"Posted Successfully", result});

})

CartController.patch('/edit/:id', async(req, res)=>{
    const {id} = req.params;
    const body = req.body;
    const {userId} = req.body;
    const cartItem = await CartModel.findOne({_id:id});
    if(cartItem.userId===userId){
        const result = await CartModel.findOneAndUpdate({_id:id}, body, {new:true});
        res.send("Updated Successfully");
    }
    else{
        res.send("Please Login");
    }

})

// CartController.patch('/edit/:id', async(req, res)=>{
//     const {id} = req.params;
//     const body = req.body;
//     const {userId} = req.body;
//     const cartItem = 
// })

CartController.delete('/delete/:id', async(req, res)=>{
   const {id} = req.params;
   const {userId} = req.body;
   const CartItem = await CartModel.findOne({_id:id});
   if(CartItem.userId===userId){
     const result = await CartModel.findOneAndDelete({_id:id});
     res.send("Deleted Successfully");
   }
   else{
    res.send("Cart Item Not Found");
   }

}) 



module.exports = CartController;




