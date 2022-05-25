import mongoose from 'mongoose';
import Property from '../models/Property.js'

export const createProperty =async(req,res)=>{
    const newProperty = new Property(req.body);

    try {
      const savedProperty = await newProperty.save();
      res.status(200).json(savedProperty);
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

//get single property

export const getByType=async(req,res)=>{
  const qtype=req.query.abdi;
       try {
        const sample = new RegExp(qtype,'i')
         const property = await Property.find({"details.propertytype":"sale"}).populate("agents");
         res.status(200).json([property])
         console.log(property)
       } catch (error) {
        res.status(404).json({message:error.message})
       }
}

//update property

export const updateProperty=async(req,res)=>{
  try {
    const updatedProperty = await Property.findByIdAndUpdate(req.params.id,{
      $set:req.body
    },{new:true})
    res.status(200).json(updatedProperty)
  } catch (error) {
    res.status(404).json({message:error.message})
  }
}

//delete property

export const deleteProperty=async(req,res)=>{
   try {
        await Property.findByIdAndDelete(req.params.id)
     res.status(200).json("property has been deleted...")
   } catch (error) {
     res.status(400).json({message:error.message})
   }
}


export const getSingleProperty=async(req,res)=>{
 const {id} = req.params
 
 try {
  const singleProperty = await Property.findById(id).populate("agents");

     res.status(200).json(singleProperty)
  } catch (error) {
   res.status(404).json({message:error.message})
 }
}


//get all properties or by realstate type


export const getProperty =async(req,res)=>{
  const qOwner=req.query.realstate;
  const qType=req.query.types
 try{
    let properties;
    const sample = new RegExp(qOwner,'i')
    const sampletwo = new RegExp(qType,'i')
     if(qOwner){
        properties = await Property.find({
            owner:{
                $in:[sample]
            }
        }).populate("agents");
    }
    else if(qType){
      properties = await Property.find({
          type:{
              $in:[sampletwo]
          }
      }).populate("agents");
  }
    else{
        properties =await Property.find().populate("agents");
    }
    
     res.status(200).json(properties)
 }catch(err){
     res.status(500).json(err)
 }
}


