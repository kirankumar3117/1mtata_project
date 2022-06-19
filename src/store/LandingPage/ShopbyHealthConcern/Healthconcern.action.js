import { Brands } from "./Healthconcern"
import { GET_HEALTHCARE } from "./Healthconcern.type"


export const get_healthconcern=()=>(dispatch)=>{
    dispatch({type:GET_HEALTHCARE,payload:Brands})
}