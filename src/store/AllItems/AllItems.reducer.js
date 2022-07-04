import { GET_ALL_PRODUCTS } from "./AllItems.type"


const initial={
    allproducts:[]
}

export const AllProductsReducer=(state=initial,{type,payload})=>{
    switch(type){
        case GET_ALL_PRODUCTS:{
            return {
                ...state,
                allproducts:payload
            }
            
        }
        default:{
            return state
        }
    }
}