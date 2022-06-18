import React, { useEffect ,useState} from 'react'
import {Brands} from "../../store/FeaturedBrands/Featuredbrands"
import styled from "./FeaturedBrands.module.css"
import {BsChevronRight,BsChevronLeft} from "react-icons/bs"
import { useDispatch, useSelector } from 'react-redux'
import { get_featured_brand } from '../../store/FeaturedBrands/FeaturedBrands.action'
const FeaturedBrands = () => {
   
   const {data}=useSelector((state)=>state.featuredbrand)
   const dispatch=useDispatch()
    useEffect(()=>{
       dispatch(get_featured_brand())
    },[])
  return (
    <div>
        <div className={styled.component1}>
            <div className={styled.component1_1}>Featured Brands</div>
            <div className={styled.component1_2}>SEE ALL</div>
        </div>

        <div className={styled.component2}>
        <div className={styled.maincomponent} >
        <div className={styled.buttondiv}><BsChevronLeft className={styled.button}/></div>
            {data.map(e=>{
                return <div className={styled.item} key={e.id} onClick={()=>{
                    console.log(e)
                }}>
                    <br/>
                    <img src={e.img} alt="" data-aos="" className={styled.image}/>
                    <br/>
                   
                    <div className={styled.itemname}>{e.name}</div>
                </div>
            })}
            <div className={styled.buttondiv} onClick={()=>{
            //    setState(state+7)
            }}><BsChevronRight className={styled.button}/></div>
           
        </div>
        </div>
       
    </div>
  )
}

export default FeaturedBrands