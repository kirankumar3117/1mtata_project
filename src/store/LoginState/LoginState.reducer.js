import { SET_LOGIN_STATE } from "./LoginState.type";

const initial={
    state:false,
}

export const LoginStateReducer=(state=initial,{type,payload})=>{
    switch(type){
        case SET_LOGIN_STATE:{
            return {
                ...state,
                state:payload,
            }
        }
        default:{
            return state;
        }
    }
}