const express=require("express");

const router=express.Router();

const Fooddata=require("./model")

router.get("", async (req, res) => {
    try {
      const fooddata = await Fooddata.find().lean().exec();
  
      return res.status(200).send(fooddata || nodata);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
router.post("",async (req,res)=>{
  try{
  const fooddata=await Fooddata.create(req.body)
  return res.status(201).send(fooddata)
  }
  catch(err){
    return res.status(500).send({message:err.message})
  }

})


  module.exports=router;