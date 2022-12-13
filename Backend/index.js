const express = require('express');
const cors = require('cors');
const connection = require('./Config/db.js');
const HeadPhonesController = require('./Routes/headphones.Routes.js');
const EarphonesController = require('./Routes/earphones.Routes');
const SpeakerController = require('./Routes/speaker.Routes');
const HeadphonesModel = require('./Models/headphones.Model');
const userController = require('./Routes/user.Routes.js');
const EarphonesModel = require('./Models/earphones.Model.js');
const SpeakerModels = require('./Models/speaker.Model.js');
const authentication = require('./Middlewares/Authentication.js');
const CartController = require('./Routes/cart.Routes.js');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/user', userController);

app.use('/headphones' , HeadPhonesController);
app.use('/earphones' , EarphonesController);
app.use('/speaker' , SpeakerController);

app.use('/cart', authentication, CartController);


app.get('/:id', async(req, res)=>{
  
    const {id} = req.params;
    const result =await  HeadphonesModel.findOne({_id:id}) || await  EarphonesModel.findOne({_id:id}) || await  SpeakerModels.findOne({_id:id});
    res.send(result)

});

app.listen(8080, async()=>{
    try {
        await connection;
        console.log("Connected");
        
    } catch (error) {
        console.log(error);
    }
});