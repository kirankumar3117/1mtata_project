import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import { useEffect } from 'react'
import styled from "./PopularCatogery.module.css"
import { get_popular_catogery } from '../../store/LandingPage/popularcatogery/popularcatogery.action'

const PopularcATOGERY = () => {
    const {data}=useSelector((state)=>state.popularcatogery)
    const dispatch=useDispatch()
     useEffect(()=>{
        dispatch(get_popular_catogery())
     },[])
  return (
    <div>
          <div className={styled.component1}>
            <div className={styled.component1_1}>Popular Catogery</div>
            {/* <div className={styled.component1_2}>SEE ALL</div> */}
        </div>

        <div className={styled.component2}>
        <div className={styled.maincomponent} >
        {/* <div className={styled.buttondiv}><BsChevronLeft className={styled.button}/></div> */}
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
            {/* <div className={styled.buttondiv} onClick={()=>{
            //    setState(state+7)
            }}><BsChevronRight className={styled.button}/></div> */}
           
        </div>
        </div>
    </div>
  )
}

export default PopularcATOGERY