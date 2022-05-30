import Agent from '../models/Agent.js'


//create agent
export const createAgent=async(req,res)=>{
    const newagent = Agent(req.body);

    try{
        const savedagent = await newagent.save()
        res.status(200).json(savedagent)
    }catch(error){
      res.status(500).json({message:error.message})
    }
}

//coment to agent

export const deleteComent=async(req,res)=>{
    
 const {id} =req.params
   
 try{
   await Agent.findByIdAndDelete(id)
   
    res.status(200).json("deleted succssfull")
    }catch(error){
      res.status(500).json({message:error.message})

}
}

//get coments

export const CreateComment=async(req,res)=>{
    const {id} =req.params
    const {value}=req.body

   try{
    const agents = await Agent.findById(id);
    agents.comments.push("intermediate agent ever")
    const updatedAgent =await Agent.findByIdAndUpdate(id,agents,{new:true})
    res.status(200).json(updatedAgent)
    }catch(error){
      res.status(500).json({message:error.message})

}
}

//get single agent

export const getSingleAgent=async(req,res)=>{
    try{
        const agent = await Agent.findById(req.params.id)
        res.status(200).json([agent])
   

    }catch(err){
        res.status(500).json(err)
    }   
}

export const updateAgent=async(req,res)=>{
        
    try{
        let updatedMeal = await Agent.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updatedMeal)
   

    }catch(err){
        res.status(500).json(err)
    }     
}

//get all agents

export const getAllAgent=async(req,res)=>{
    try {
        const allAgents = await Agent.find()
        res.status(200).json(allAgents)
    } catch (error) {
        res.status(500).json(err)
    }
}