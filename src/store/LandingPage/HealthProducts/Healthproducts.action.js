import { Brands } from "./Healthproducts"
import { GET_HEALTHPRODUCTS } from "./Healthproducts.type"



export const get_healthproducts=()=>(dispatch)=>{
    dispatch({type:GET_HEALTHPRODUCTS,payload:Brands})
}