import { GET_ALL_USERS, USER_STATE } from "./User.type"


const initial={
   userState:false,
}

export const UserReducer=(state=initial,{type,payload})=>{
    switch(type){
       case USER_STATE:{
        return {
            ...state,
            userState:payload
        }
       }
        default:{
            return state
        }
    }
}