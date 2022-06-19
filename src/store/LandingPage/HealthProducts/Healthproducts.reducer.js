import { GET_HEALTHPRODUCTS } from "./Healthproducts.type"

const initial={
    data:[]
}

export const HealthproductsReducer=(state=initial,{type,payload})=>{
        switch(type){
            case GET_HEALTHPRODUCTS:{
                return {
                    ...state,
                    data:payload
                }
            }
            default: {
                return state
            }
        }
}