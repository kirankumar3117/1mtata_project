import React from 'react'
import styled from "./searchbar.module.css"
import { city_list } from './district'
import {useSelector,useDispatch} from "react-redux"
import { search_city } from '../../store/searchbar/searchbar.action'
const CityList = () => {
const {show_citylist}=useSelector((state)=>state.searchbar)
const dispatch=useDispatch()
const handlecity=(el)=>{
    console.log(el)
    dispatch(search_city(el))
}

  return (
    <div className={show_citylist==true ? styled.citylist : styled.hidecitylist}>
        {city_list.map(el=>{
            return <div onClick={()=>handlecity(el)}>{el}</div>
        })}
    </div>
  )
}

export default CityList