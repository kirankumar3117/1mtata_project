import { GET_POPULAR_CATOGERY } from "./popularcatogery.types"
import {Brands} from "./popularcatogery"

export const get_popular_catogery=()=>(dispatch)=>{
    dispatch({type:GET_POPULAR_CATOGERY,payload:Brands})
}