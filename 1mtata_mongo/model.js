const mongoose=require("mongoose");

const homeSchema=new mongoose.Schema({
    name:{type:String,required:true},
    img:{type:String,required:true},
    from:{type:String,required:true},
    brand:{type:String,required:true},
    catogery:{type:String,required:true},
    quantity:{type:String,required:true},
    price:{type:Number,required:true},
    discount:{type:Number,required:true},
    rating:{type:Number,required:true},
    type:{type:String,required:true},
    images:{type:Array},
    description:{type:Array},

},{
    versionKey:false
});

const Fooddata= mongoose.model("1mtata",homeSchema);

module.exports=Fooddata;

