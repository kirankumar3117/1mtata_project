import { CHANGE_IMAGE } from "./slidebar.types"

const initial={
    id:0
}
export const slidebarReducer=(state=initial,{type,payload})=>{
    switch(type){
        case CHANGE_IMAGE:{
            return {
                ...state,
                id:payload
            }
        }
        default:{
            return state
        }
    }
}