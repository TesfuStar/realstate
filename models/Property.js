import mongoose  from 'mongoose'


const AddressSchema = new mongoose.Schema({
      city:{type:String,required:true},
      area:{type:String,required:true},
      latitude:{type:Number,required:true},
      longtude:{type:Number,required:true}

})

const PropertySchema = new mongoose.Schema({
    name:{type:String,required:true},
    img:{type:Array,required:true},
    price:{type:Number,required:true},
    description:{type:String,required:true},//text descriptionfor the property 
    details:{
        area:{type:Number,required:true},//in square
        bedroom:{type:Number,required:true},
        bathroom:{type:Number,required:true},
        yearbuilt:{type:Number,required:true},
        propertytype:{type:String,required:true},//rent or sale
        floor:{type:Number},
    
    },
    owner:{type:String,required:true},//realstate name 
    agents:[{type:mongoose.SchemaTypes.ObjectId,ref:'Agent'}],
    address:AddressSchema
    

},{timestamps:true})


const Property = mongoose.model('Property',PropertySchema)


export default Property