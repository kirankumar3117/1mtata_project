import React, { useState } from 'react'
import { useEffect } from 'react'
import styled from "./Cart.module.css"
import axios from "axios"
import { get_all_products } from '../store/AllItems/AllItems.action'
import { useDispatch, useSelector } from 'react-redux'
const Cart = () => {
    const dispatch=useDispatch()
    const [input,setInput]=useState()
    const {allproducts}=useSelector((state)=>state.getallproducts)
    const [data,setData]=useState([])
    const handleChange=(e)=>{
        let femiliar=[]
      setTimeout(() => {
        setInput(e.target.value)
       let takeninput=input.toLowerCase()
       allproducts.filter(e=>{
        let type;
        let real;
        if(e.type){
            type=e.type;
            type=type.toLowerCase();
            type=type.slice(0,takeninput.length)
        }
        if(e.real){
            real=e.real;
            real=real.toLowerCase();
            real=real.slice(0,takeninput.length)
        }
       if(takeninput==type || takeninput==real){
        if(femiliar.includes(e)){
            return 
        }
        else if(femiliar.length<=3){
            femiliar.push(e)
            setData(femiliar)
         }
         else{
            return 
         }
       }
       })

      }, 2000);
    
    }

    useEffect(()=>{
    dispatch(get_all_products())
    },[])
    useEffect(()=>{
        console.log(data)
        if("oil"=="Oil"){
            console.log("Yes")
        }
    },[data])
  return (
    <div>
        <div className={styled.navbarcontainer}>
        <div className={styled.navbar}>
            <div>
                <img src="https://www.1mg.com/images/tata_1mg_logo.svg" alt="" width="110px" />
            </div>
            <div>
                <input type="text" placeholder="Search for Medicines and Health Products" className={styled.input} onChange={(e)=>{
                    handleChange(e)
                }}/>
            </div>
            <div>Need Help?</div>
        </div>
        </div>
    </div>
  )
}

export default Cart