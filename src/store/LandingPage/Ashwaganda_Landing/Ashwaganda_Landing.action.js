import { Brands } from "./Ashwaganda_Landing"
import { GET_ASHWAGANDA_LANDING } from "./Ashwaganda_Landing.type"


export const get_ashwaganda_landing=()=>(dispatch)=>{
    dispatch({type:GET_ASHWAGANDA_LANDING,payload:Brands})
}