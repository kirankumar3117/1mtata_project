import { GET_TOP_NUTRITION_SELLER } from "./TopNutritionSeller.type"


const initial={
    data:[]
}

export const TopNutritionSellerReducer=(state=initial,{type,payload})=>{
    switch(type){
        case GET_TOP_NUTRITION_SELLER:{
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