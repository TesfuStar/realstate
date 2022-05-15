import mongoose  from 'mongoose'
const AgentSchema = new mongoose.Schema({
    name:{type:String,required:true},
    img:{type:String},
    phoneNo:{type:Number,required:true},
    comments:{type:[String],default:[]}

})



const Agent = mongoose.model('Agent',AgentSchema)


export default Agent