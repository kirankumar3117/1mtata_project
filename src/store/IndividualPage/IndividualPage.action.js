
import axios from "axios"
import { GET_INDIVUDUALITEM, GET_INDIVUDUALITEM_LOADING } from "./IndividualPage.type"

export const get_indual_item=(id)=>(dispatch)=>{
    dispatch({type:GET_INDIVUDUALITEM_LOADING})
    axios.get("https://tatadata.herokuapp.com/data").then((res)=> res.data).then((res)=> res.filter(e=>{
        return e._id===id ? dispatch({type:GET_INDIVUDUALITEM,payload:e}) : null
    }))
}