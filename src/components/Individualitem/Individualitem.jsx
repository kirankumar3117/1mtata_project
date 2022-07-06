import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { get_indual_item } from '../../store/IndividualPage/IndividualPage.action'
import Navbar from "../Navbar/Navbar"
import Searchbar from "../Searchbar/Searchbar"
import Listofitems from "../ListOfItems/Listofitems"
import styled from "./Individualitem.module.css"
import {AiFillStar} from "react-icons/ai"
import {GoPrimitiveDot} from "react-icons/go"
import Footer from "../Footer/Footer"
import { useState } from 'react'
import {TbArrowWaveRightUp} from "react-icons/tb"
import {BiRupee} from "react-icons/bi"
import {set_login_state} from "../../store/LoginState/LoginState.action"
import axios from "axios"
import { cart_state_management } from '../../store/User/User.action'
const Individualitem = () => {
    const {name,id}=useParams()
    const {data,loading}=useSelector((state)=>state.individualitempage);
    const {userState,userdata,cartStateManagement}=useSelector((state)=> state.user);
    const dispatch=useDispatch()
    const [bought,setBought]=useState(0);
    const [quantity,setQuantity]=useState(1);
    useEffect(()=>{
       dispatch(get_indual_item(id))
       setBought(Math.round(Math.random()*2544))
        
    },[id])
    useEffect(()=>{
      data.totalquantity=data.totalquantity || 1;
        console.log(data)
    },[loading])
  

    const handlecarding=()=>{
      if(userState==true){
        if(!data.totalquantity){
          data.totalquantity=1
        }
        let newdata=[]
        userdata.cart.items.filter(e=>{
          return (e._id==data._id ?  null   : newdata.push(e))
        
        })
       
        userdata.cart.items=[...newdata,data]
        axios.patch(`https://tatauser.herokuapp.com/user/${userdata._id}`,{
          ...userdata,
        
        }).then((res)=> console.log(res.data))
        console.log(userdata)
       
        dispatch(cart_state_management(!cartStateManagement))
      }
      else{
        dispatch(set_login_state(true))
      }
    }
   
  return (
    <div>
    <Navbar/>
    <Searchbar/>
    <Listofitems/>
    {loading ? 
    <div className={styled.loading}>
    <div className="spinner-border" role="status">
      <span className="sr-only">Loading...</span>
    </div>
    </div>
    :
    <div>
     <div className={styled.smallname}>
        <div>{data.name}</div>
     </div>
     <div className={styled.container}>
     <div className={styled.main}>
       <div className={styled.img}> <img src={data.img} alt="" className={styled.image}/> </div>
       <div className={styled.main2}>
        <div className={styled.name}>{data.name}</div>
        <div className={styled.from}>{data.from}</div>
        <div className={styled.mainrating}>
        <div className={styled.rating}>{data.rating}<AiFillStar className={styled.ratingstar}/></div>
        </div>
        {data.description ? <div className={styled.heighlights}>
          <div>Product highlights</div>
          <div className={styled.maping}>
           {data.description.map(e=>{
            return <div className={styled.emap}><div><GoPrimitiveDot/></div><div className={styled.element}>{e}</div></div>
          })}
          </div>
        </div> : null}
       </div>
      
     </div>
     <div>
      <div className={styled.cart}>
        <div className={styled.peoplebought}><TbArrowWaveRightUp className={styled.stack}/>{bought}  People bought this recently</div>
        <div className={styled.price}> <div className={styled.toggle}><div className={styled.toggle_1}></div></div> <div className={styled.finalprice}><BiRupee className={styled.price_1}/> {(data.price-(data.discount/100)*data.price).toFixed(0)}</div>
        <div className={styled.totalprice}><BiRupee className={styled.price_2}/>{data.price}</div>
        </div>
        <div className={styled.discount}>{data.discount}% off</div>
        <div className={styled.taxes}>Inclusive of all taxes</div>
        <div className={styled.selectop}>
        <select name="Quantity" id="" className={styled.select} onChange={(e)=>{
         let value=e.target.value;
         value=+value;
         setQuantity(value)
        }}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
         
        </select>
        <div>Quantity</div>
        </div>
        <div className={styled.addcart} onClick={()=>{
          handlecarding()
        }}>ADD TO CART</div>
      </div>
     </div>
     </div>
    </div>}
   
   <Footer/>
    </div>
  )
}

export default Individualitem