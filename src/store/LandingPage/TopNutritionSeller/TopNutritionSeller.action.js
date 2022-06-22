import axios from "axios"
import { GET_TOP_NUTRITION_SELLER } from "./TopNutritionSeller.type"





export const get_top_nutrition_seller=()=>(dispatch)=>{
    axios.get("https://tatadata.herokuapp.com/data").then((res)=> res.data.filter((e)=> e.stand="Abbott Nutritions" ? e : null)).then((res)=>   dispatch({type:GET_TOP_NUTRITION_SELLER,payload:res}))
  
}