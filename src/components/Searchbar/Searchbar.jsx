import React, { useEffect,useState } from 'react'
import axios from "axios"
import {MdLocationOn} from "react-icons/md"
import {AiFillThunderbolt,AiOutlineSearch} from "react-icons/ai"
import {BiCurrentLocation} from "react-icons/bi"
import styled from "./searchbar.module.css"
import { useSelector,useDispatch } from 'react-redux'
import { hide_citylist, search_city, showlist } from '../../store/searchbar/searchbar.action.js'
import {city_list} from "./district"
import CityList from './CityList'
import { HIDE_CITY_LIST, SHOW_CITY_LIST } from '../../store/searchbar/searchbar.type'
import { useRef } from 'react'


let apikey=`82b7f2609d7dda6f515e821c1c0afbbe`
let apiurl=`https://api.openweathermap.org/geo/1.0/reverse?`


const Searchbar = () => {

  const cityRef=useRef()
  const {city: searchedcity,show_citylist : show}=useSelector((state)=>state.searchbar)
  const dispatch=useDispatch()
  const [ll,setLl]=useState(false)
  const [lat,setLat]=useState("")
  const [lon,setLon]=useState("")
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
      setLat(position.coords.latitude)
      setLon(position.coords.longitude)
    })
  axios.get(`${apiurl}lat=${lat}&lon=${lon}&limit=1&appid=${apikey}`).then((res)=>{
   let m=(res.data)
    
  return  dispatch(search_city(m[0].name))
  })

  
  },[lat,lon,ll])



  useEffect(()=>{
    const closelist=(e)=>{
     if(e.path[0]!==cityRef.current){
      dispatch(hide_citylist())
      }
    }
    document.addEventListener('click',closelist)

    return () => document.removeEventListener('click',closelist)
  },[])


const handecitylist=()=>{
  if(show==true){
    // console.log(show)
    dispatch(hide_citylist())
  }
  else{
    // console.log("show",show)
    dispatch(showlist())
  }
}


  return (
    <div>
          <div className={styled.Searchbar}>

      {/*Input Seaction Of Search bar*/}
      <div className={styled.inputes}>

        {/* Location input box*/}
        <div className={styled.icon_input}>
        <MdLocationOn className={styled.locationicon} onClick={()=>{
          setLl(!ll)
        }}/>
      <input ref={cityRef} type="text" defaultValue={searchedcity} className={`${styled.cityinput}`} onClick={()=>handecitylist()}/>
      <BiCurrentLocation className={styled.locationpointer} onClick={()=>{
          setLl(!ll)
        }} ref={cityRef}/>
     

        </div>
      
         {/*Search input box*/}
         <div className={styled.searchinput_icon}>
         <input type="text" placeholder="Search For Medicines and Health Products" className={styled.searchinput}/>
         <AiOutlineSearch className={styled.searchicon}/>
         </div>
    
      </div>
   <div className={styled.searchbar1}>      <div className={styled.searchOffer}>
        <div className={styled.thunder_icon}><AiFillThunderbolt /></div>
        <div>QUICK BUY! <span style={{fontSize:"12px"}}>Get 25% off on medicines*</span> </div>
      </div>
      <div><button className={styled.button}>Quick order</button></div>
      </div>
    </div>
    <CityList/>
    </div>
  )
}

export default Searchbar