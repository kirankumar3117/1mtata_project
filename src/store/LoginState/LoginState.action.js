import { SET_LOGIN_STATE } from "./LoginState.type"


export const set_login_state=(value)=>(dispatch)=>{
    dispatch({type:SET_LOGIN_STATE,payload:value})
}