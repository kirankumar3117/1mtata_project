import { GET_INDIVUDUALITEM, GET_INDIVUDUALITEM_LOADING } from "./IndividualPage.type"

const initial={
    data:{},
    loading:false
}



export const IndividualPageReducer=(state=initial,{type,payload})=>{
    switch(type){
        case GET_INDIVUDUALITEM_LOADING:{
            return {
                ...state,
                loading:true
            }
        }
        case GET_INDIVUDUALITEM:{
            return {
                ...state,
                data:payload,
                loading:false
            }
        }
        default:{
            return state
        }
    }
}