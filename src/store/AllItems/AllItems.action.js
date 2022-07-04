import axios from "axios"
import { GET_ALL_PRODUCTS } from "./AllItems.type"

export const get_all_products=()=>(dispatch)=>{
    async function data(){
        let res=await axios.get("https://tatadata.herokuapp.com/data")

        res=await res.data
        return res
    }

   async function finaldata(){
    let totaldata=await data()
    // console.log("totaldata : ",totaldata)
    dispatch({type:GET_ALL_PRODUCTS,payload:totaldata})
   }

   finaldata()
}