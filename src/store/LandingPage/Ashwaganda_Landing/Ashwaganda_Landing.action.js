
import { GET_ASHWAGANDA_LANDING } from "./Ashwaganda_Landing.type"
import axios from "axios"


export const get_ashwaganda_landing=()=>(dispatch)=>{
    var arr;
    var data=[]
    axios.get("https://tatadata.herokuapp.com/data").then((res)=> res.data.filter((e)=> e.stand=="Ashwaganda" ? e:null)).then((res)=>  dispatch({type:GET_ASHWAGANDA_LANDING,payload:res}))
   
   
   
}