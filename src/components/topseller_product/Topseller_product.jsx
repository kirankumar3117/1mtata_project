import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { get_top_nutrition_seller } from '../../store/LandingPage/TopNutritionSeller/TopNutritionSeller.action'
import styled from "./Topseller_product.module.css"
import {useEffect} from "react"
import {AiFillStar} from "react-icons/ai"
import {BiRupee} from "react-icons/bi"
import {useNavigate} from "react-router-dom"
const Topseller_product = () => {
    const navigator=useNavigate()
    const {data}=useSelector((state)=>state.topnutritionseller)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(get_top_nutrition_seller())
     },[])
  return (
    <div>
           <div className={styled.component1}>
            <div className={styled.component1_1}>Top Sellers From Abbott Nutritions</div>
            <div className={styled.component1_2}>SEE ALL</div>
        </div>

        <div className={styled.component2}>
        <div className={styled.maincomponent} >
            {data.map(e=>{
                return <div className={styled.item} key={e.id}onClick={()=>{
                    navigator(`otc/${e.name}`)
                 }}>
                    <br/>
                    <div className={styled.mainimage}>
                    <img src={e.img} alt="" data-aos="" className={styled.image}/>
                    </div>
                    <div className={styled.itemname}>{e.name}</div>
                    <div className={styled.quantity}>{e.quantity}</div>
                    <div className={styled.rating}>
                        <div className={styled.rating1}>{` ${ e.rating}`}<AiFillStar className={styled.ratingstar}/></div>
                        <div className={styled.rating2}>{(Math.random()*2000).toFixed(0)} ratings</div>
                       </div>

                    <div className={styled.mrp}>
                        <div>MRP</div>
                        <div className={styled.mrp2}>
                            <div><BiRupee className={styled.mrpicon}/></div>
                            <div>{e.price}</div>
                        </div>
                        <div className={styled.mrp3}>{e.discount}% off </div>
                    </div>

                    <div className={styled.actualmrp}>
                        <BiRupee/>{(e.price-(e.discount/100*(e.price))).toFixed(0)}
                    </div>
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

export default Topseller_product