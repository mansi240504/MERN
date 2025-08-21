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


module.exports= router;

