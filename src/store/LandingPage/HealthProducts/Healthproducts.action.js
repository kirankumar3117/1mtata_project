import axios from "axios"
import { GET_HEALTHPRODUCTS } from "./Healthproducts.type"



export const get_healthproducts=()=>(dispatch)=>{
    axios.get("https://tatadata.herokuapp.com/data").then((res)=> res.data.filter((e)=> e.stand=="Tata" ? e:null)).then((res)=>   dispatch({type:GET_HEALTHPRODUCTS,payload:res}))
  
}