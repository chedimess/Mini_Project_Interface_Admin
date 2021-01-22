const express=require("express")
const router=express.Router()
const Category=require("../models/Category")
const Produit=require("../models/Produit")


// add category
router.post('/addcategory', (req,res)=>{
    const {name}=req.body

    const category= new Category({name})
    category.save()
     .then(category=>res.send(category))
     .catch(err=>console.log(err))
          });

// get all category
router.get('/allcategory',(req,res)=>{
    Category.find()
    .then(category=>res.send(category))
    .catch(err=>console.log(err))
          });

//Delete category
router.delete("/deletecategory/:_id", async (req,res)=>{
    const _id=req.params._id
    const categoryId= _id
    try {
        const category= await Category.findOneAndDelete({_id})
        const produit= await Produit.deleteMany({categoryId})
         res.json({category,produit})
        }  catch (err) {
            return res.status(500).json({msg: err.message})
        }
    });


// edit category
router.put("/editcategory/:_id",(req,res)=>{

    const {name}=req.body
    const _id=req.params._id

    Category.findOneAndUpdate({_id},{$set:{name}},{new:true})
    .then(category=>res.send(category))
    .catch(err=>console.log(err))
});


module.exports=router
