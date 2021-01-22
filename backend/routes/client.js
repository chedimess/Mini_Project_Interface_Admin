const express=require("express")
const router=express.Router()
const Client=require("../models/Client")


// add client
router.post('/addclient', (req,res)=>{
    const {firstName,lastName,email}=req.body

    const client= new Client({firstName,lastName,email})
    client.save()
     .then(client=>res.send(client))
     .catch(err=>console.log(err))
          });
// get all category
router.get('/allclient',(req,res)=>{
    Client.find()
    .then(client=>res.send(client))
    .catch(err=>console.log(err))
          });

//Delete category
router.delete("/deleteclient/:_id",(req,res)=>{
    const _id=req.params._id

     Client.findOneAndDelete({_id}).then(client=>res.send(client))
     .catch(err=>console.log(err))
    });

// edit category
router.put("/editclient/:_id",(req,res)=>{

    const {firstName,lastName,email}=req.body
    const _id=req.params._id

    Client.findOneAndUpdate({_id},{$set:{firstName,lastName,email}},{new:true})
    .then(client=>res.send(client))
    .catch(err=>console.log(err))
});


module.exports=router