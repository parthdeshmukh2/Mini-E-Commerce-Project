const express = require('express');
const cors = require('cors');
const connection = require('./Config/db.js');
const HeadPhonesController = require('./Routes/headphones.Routes.js');
const HeadphonesModel = require('./Models/headphones.Model');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/headphones' , HeadPhonesController);
app.get('/:id', async(req, res)=>{
  
    const {id} = req.params;
    const result =await  HeadphonesModel.findOne({_id:id});
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