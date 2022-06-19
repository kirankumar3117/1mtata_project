import { GET_HEALTHCARE } from "./Healthconcern.type"

const initial={
    data:[]
}

export const HealthconcernReducer=(state=initial,{type,payload})=>{
    switch(type){
        case GET_HEALTHCARE:{
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