import { CARTSTATEMANAGEMENT, GET_ALL_USERS, GET_SINGLE_USER, USER_STATE, USER_VERIFIED } from "./User.type"
import axios from "axios"
import { useSelector } from "react-redux"





export const user_state=(value)=>(dispatch)=>{
  dispatch({type:USER_STATE,payload:value})
}

export const user_verified=(value)=>(dispatch)=>{
  
  axios.get("https://tatauser.herokuapp.com/user").then((res)=> check(res.data));

 function check(data){
  let isthere=false;
  let user;
  data.filter(e=>{
    if(e.number===value){
      user=e;
      isthere=true;
    }
  });

  if(user){
    dispatch({type:USER_VERIFIED,payload:user})
  }
  else{
    axios.post('https://tatauser.herokuapp.com/user',{
      number:value,
      cart:{
        items:[]
      },
      orders:{
        items:[]
      },
      payment:{
        
      }
    }).then((res)=>{
      dispatch({type:USER_VERIFIED,payload:res.data})
    })
  }
 
 }
}

export const get_single_user=(id)=>(dispatch)=>{
  axios.get(`https://tatauser.herokuapp.com/user/${id}`).then((res)=>{
    dispatch({type:GET_SINGLE_USER,payload:res.data})
  })
}

export const cart_state_management=(value)=>(dispatch)=>{
  dispatch({type:CARTSTATEMANAGEMENT,payload:value})
}