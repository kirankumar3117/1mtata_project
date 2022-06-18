import { CHANGE_IMAGE } from "./slidebar.types"


export const slidebar_image_change=()=>(dispatch)=>{
    let value=0;
    setInterval(()=>{
        if(value==5){
            value=0
        }
        setTimeout(() => {
            dispatch({type:CHANGE_IMAGE,payload:value})
            value++
        }, 1000*5);
       
    },1000*7)
}