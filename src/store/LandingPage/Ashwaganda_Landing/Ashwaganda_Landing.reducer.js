import { GET_ASHWAGANDA_LANDING } from "./Ashwaganda_Landing.type"


const initial={
    data:[]
}

export const Ashwaganda_LandingReducer=(state=initial,{type,payload})=>{
        switch(type){
            case GET_ASHWAGANDA_LANDING:{
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