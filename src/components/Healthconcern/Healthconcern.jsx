import React from 'react'
import { get_healthconcern } from '../../store/LandingPage/ShopbyHealthConcern/Healthconcern.action'
import {useEffect} from "react"
import {useDispatch,useSelector} from "react-redux"
import styled from "./Healthconcern.module.css"
import {useNavigate} from "react-router-dom"
const Healthconcern = () => {
    const navigator=useNavigate()
    const {data}=useSelector((state)=>state.healthconcern)
    const dispatch=useDispatch()
     useEffect(()=>{
        dispatch(get_healthconcern())
     },[])
  return (
    <div>
         <div className={styled.component1}>
            <div className={styled.component1_1}>Health Concern</div>
            {/* <div className={styled.component1_2}>SEE ALL</div> */}
        </div>

        <div className={styled.component2}>
        <div className={styled.maincomponent} >
        {/* <div className={styled.buttondiv}><BsChevronLeft className={styled.button}/></div> */}
            {data.map(e=>{
                return <div className={styled.item} key={e.id} onClick={()=>{
                    navigator(`otc/${e.name}`)
                 }}>
                    <br/>
                    <img src={e.img} alt="" data-aos="" className={styled.image}/>
                    <br/>
                   
                    <div className={styled.itemname}>{e.name}</div>
                </div>
            })}
            {/* <div className={styled.buttondiv} onClick={()=>{
            //    setState(state+7)
            }}><BsChevronRight className={styled.button}/></div> */}
           
        </div>
        </div>
    </div>
  )
}

export default Healthconcern