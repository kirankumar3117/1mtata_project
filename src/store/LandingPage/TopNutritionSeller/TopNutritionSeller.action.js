import { Brands } from "./TopNutritionSeller"
import { GET_TOP_NUTRITION_SELLER } from "./TopNutritionSeller.type"





export const get_top_nutrition_seller=()=>(dispatch)=>{
    dispatch({type:GET_TOP_NUTRITION_SELLER,payload:Brands})
}