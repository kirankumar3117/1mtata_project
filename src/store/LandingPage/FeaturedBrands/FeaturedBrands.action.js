import { GET_FEATURED_BRAND } from "./FeaturedBrands.types"
import { Brands } from "./Featuredbrands"

export const get_featured_brand=()=>(dispatch)=>{
        dispatch({type:GET_FEATURED_BRAND,payload:Brands})
}