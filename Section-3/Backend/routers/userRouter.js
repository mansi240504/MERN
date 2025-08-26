const express = require('express');
const Model = require('../models/user_Model')

const router= express.Router();

router.post ("/add",(req,res)=>{
    console.log(req.body);
    // res.send("response from user router")

    new Model(req.body).save()
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
        
    });
});
  
//getall
router.get ("/getall",(req,res)=>{
    // res.send("response from user  getall")
    Model.find()
    .then((result) => {
        res.status(200).json(result);
        
    }).catch((err) => {
        console.log(err);

        res.status(500).json(err);
        
    });
});

//delete
router.get ("/delete",(req,res)=>{
    res.send("deleted")
});

//getbyid
router.get ("/getbyid",(req,res)=>{
    res.send("response from user id")
});

//update
router.get ("/update",(req,res)=>{
    res.send("response from user updete")
});
router.get('/getbycity/:city',(req,res)=>{
    Model.find({city:req.params.city})
    .then((result) => {
        res.status(200).json(result);
        
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
        
    });
})

router.get('/getbyemail/:email',(req,res)=>{
    Model.findOne({email:req.params.email})
    .then((result) => {
        res.status(200).json(result);
        
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
        
    });
})

router.get('/getbyid/:id',(req,res)=>{
    Model.findById(req.params.id)
    .then((result) => {
        res.status(200).json(result);
        
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
        
    });
})

router.delete('/delete/:id',(req,res)=>{
    Model.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.status(200).json(result);
        
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
        
    });
})

router.put('/update/:id',(req,res)=>{
    Model.findByIdAndUpdate(req.params.id,req.body,{new:true})
    .then((result) => {
        res.status(200).json(result);
        
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
        
    });
})


module.exports= router;

