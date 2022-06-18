
import { GET_FEATURED_BRAND } from "./FeaturedBrands.types"

const initial={
    data:[]
}

export const FeaturedbrandReducer=(state=initial,{type,payload})=>{
    switch(type){
        case GET_FEATURED_BRAND:{
            return {
                ...state,
                data:payload
            }
        }
        default:{
            return state
        }
    }
}