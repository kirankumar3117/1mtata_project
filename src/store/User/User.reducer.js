import { CARTSTATEMANAGEMENT, GET_ALL_USERS, GET_SINGLE_USER, REMOVE_USER, USER_STATE, USER_VERIFIED } from "./User.type"


const initial={
   userState:false,
   userdata:{},
   cartStateManagement:false
}

export const UserReducer=(state=initial,{type,payload})=>{
    switch(type){
       case USER_STATE:{
        return {
            ...state,
            userState:payload,
            
        }
       }
       case USER_VERIFIED:{
         return {
            ...state,
            userdata:payload
         }
       }
       case GET_SINGLE_USER:{
        return {
            ...state,
            userdata:payload
        }
       }
       case CARTSTATEMANAGEMENT:{
         return{
            ...state,
            cartStateManagement:payload
         }
       }
       case REMOVE_USER:{
        return {
            ...state,
            userState:false,
            userdata:{}
        }
       }
       
        default:{
            return state
        }
    }
}