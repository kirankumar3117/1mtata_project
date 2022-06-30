import { GET_ALL_USERS, USER_STATE } from "./User.type"
import axios from "axios"


export const user_state=(value)=>(dispatch)=>{
  dispatch({type:USER_STATE,payload:value})
}