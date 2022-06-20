const mongoose=require("mongoose");

const connect=()=>{
    return mongoose.connect("mongodb+srv://password123:123@password123.rn083.mongodb.net/?retryWrites=true&w=food")
}

module.exports=connect;
