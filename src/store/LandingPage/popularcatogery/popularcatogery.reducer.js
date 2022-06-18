
import { GET_POPULAR_CATOGERY } from "./popularcatogery.types"

const initial={
    data:[]
}

export const PopularcatogeryReducer=(state=initial,{type,payload})=>{
    switch(type){
        case GET_POPULAR_CATOGERY:{
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