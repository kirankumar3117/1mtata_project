import { HIDE_CITY_LIST, SEARCH_CITY, SEARCH_LOADING, SEARCH_SUCCESS, SHOW_CITY_LIST } from "./searchbar.type"

export const search_loading=()=>(dispatch)=>{
    dispatch({type:SEARCH_LOADING})
}

export const search_success=()=>(dispatch)=>{
    dispatch({type:SEARCH_SUCCESS})
}

export const search_city=(value)=>(dispatch)=>{
    dispatch({type:SEARCH_CITY,payload:value})
}

export const showlist=()=>(dispatch)=>{
    dispatch({type:SHOW_CITY_LIST})
}
export const hide_citylist=()=>(dispatch)=>{
    dispatch({type:HIDE_CITY_LIST})
}