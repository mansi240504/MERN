const express = require('express');

const router= express.Router();

router.get ("/add",(req,res)=>{
    res.send("response from user router")
});
  
//getall
router.get ("/getall",(req,res)=>{
    res.send("response from user  getall")
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

