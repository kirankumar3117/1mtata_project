
const app=require("./index");


const connect=require("./config/db")

require("dotenv").config()

PORT=process.env.PORT || 8080

app.listen(PORT,async()=>{
    try{
        await connect();
        console.log("connected to MongoDB Atlas")
    }catch(err){
        console.log({message:err.message})
    }
   
});


