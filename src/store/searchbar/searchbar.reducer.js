import { HIDE_CITY_LIST, SEARCH_CITY, SEARCH_LOADING, SEARCH_SUCCESS, SHOW_CITY_LIST } from "./searchbar.type"


const initialstate={
    loading:false,
    city:"",
    show_citylist:false,
}

export const searchReducer=(state=initialstate,{type,payload})=>{
    switch(type){
        case SEARCH_LOADING:{
            return {
                ...state,
                loading:true,

            }
        }
        case SEARCH_SUCCESS:{
            return {
                ...state,
                loading:false
            }
        }
        case SEARCH_CITY:{
            return {
                ...state,
                city:payload
            }
        }
        case SHOW_CITY_LIST:{
            return {
                ...state,
                show_citylist:true
            }
        }
        case HIDE_CITY_LIST:{
            return {
                ...state,
                show_citylist:false
            }
        }
        default:{
            return state
        }
    }
}