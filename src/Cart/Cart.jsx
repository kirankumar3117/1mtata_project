import React, { useRef, useState } from 'react'
import { useEffect } from 'react'
import styled from "./Cart.module.css"
import axios from "axios"
import { get_all_products } from '../store/AllItems/AllItems.action'
import { useDispatch, useSelector } from 'react-redux'
import {useNavigate} from "react-router-dom";
import {BiRupee} from "react-icons/bi"
const Cart = () => {
    const dispatch=useDispatch()
   
    const {allproducts}=useSelector((state)=>state.getallproducts)
    const {userdata}=useSelector((state)=>state.user)
   
    const [searchState,setSearchState]=useState(false);
    const navigator=useNavigate();
    const [totalAmout,setTotalAmount]=useState(0);
    // const [itemquantity,setItemq]

    //Input search part//
    const [input,setInput]=useState()
    const [data,setData]=useState([])
    useEffect(()=>{
            let femiliar=[]
          setTimeout(() => {
           
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
                //setting data to for the dom manipulation
                setData(femiliar)
             }
             else{
                return 
             }
           }
           })
    
          }, 1000);
        
        
    },[input])
    //Input search completed
   

    useEffect(()=>{
    dispatch(get_all_products())
    },[])
    useEffect(()=>{
        console.log(data)
        if("oil"=="Oil"){
            console.log("Yes")
        }
    },[data])


    const inputRef=useRef();

    useEffect(()=>{
        userdata.cart.items.map(e=>{
            return (e.totalquantity ? null : e.totalquantity=1)
        })
        const closelist = (e) => {
            if (e.path[0] !== inputRef.current) {
              setSearchState(false)
            }
          }
          document.addEventListener('click', closelist)
      
          return () => document.removeEventListener('click', closelist)
    },[])

    const handleDecrease=(data)=>{
        let newdata=[]
        userdata.cart.items.filter(e=>{
          return (e._id==data._id ?  data.totalquantity-=1 :newdata.push(e))
        
        })
       
        userdata.cart.items=[...newdata,data]
        axios.patch(`https://tatauser.herokuapp.com/user/${userdata._id}`,{
          ...userdata,
        
        }).then((res)=> console.log(res.data))
        console.log(userdata)
       
    }
    

  return (
    <div>
        <div className={styled.navbarcontainer}>
        <div className={styled.navbar}>
            <div>
                <img src="https://www.1mg.com/images/tata_1mg_logo.svg" alt="" width="110px" />
              
            </div>
            <div>
                <input type="text" placeholder="Search for Medicines and Health Products" className={styled.input} onChange={(e)=>{
                    // handleChange(e)
                    setInput(e.target.value)

                }} ref={inputRef}
                onClick={()=>{
                    setSearchState(true)
                }}
                />
               {searchState ? <div>
                    {data ? <div className={styled.searchlist}>
                        {data.map(e=>{
                            return <div>
                                <div onClick={()=>{
                                     const win = window.open(`otc/${e.name}/otc/${e._id}`, '_blank');
                                     if (win != null) {
                                        win.focus();
                                     }
                                }}>
                                     <br/>
                                    <div className={styled.searchedname}>
                                       
                                    {e.name}
                                   
                                    </div>
                                    <br/>
                                    </div>
                            </div>
                        })}
                    </div> : null}
                </div> : null}
            </div>
            <div>Need Help?</div>
        </div>
        </div>

        {/* Cart Items List && Payment amount Details*/ }
        <div className={styled.container}>
            <div className={styled.cartmain}>
                <div className={styled.cartmain_initial}>Items present in cart ( {userdata.cart.items.length} )</div>
                <div>
                    {userdata.cart.items.map(e=>{
                        return <div className={styled.item}>
                            <div>
                            <div className={styled.itemname}>{e.name}</div>
                            <div className={styled.itemquantity}>{e.quantity}</div>
                            <div className={styled.remove}> <img src="https://img.1mg.com/images/delete_icon.svg" alt="" /> <div className={styled.remove_1}>Remove</div></div>
                            <br/>
                            </div>
                            <div className={styled.itemmain_2}>
                            <div className={styled.pricemain}><BiRupee/>{(e.price-(e.discount/100)*e.price).toFixed(0)}</div>
                            <div className={styled.price}>MRP <span className={styled.linethrough}>{e.price}</span> </div>
                            <div className={styled.cartquantity}>
                                <div onClick={()=>{
                                  handleDecrease(e)
                                }}><img src="https://www.1mg.com/images/minus-cart.svg" alt="" /></div>
                                <div>{e.totalquantity}</div>
                                <div><img src="https://www.1mg.com/images/plus-cart.svg" alt="" /></div>
                            </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
            <div className={styled.paymentmain}>
                <div>
                <div>
                    <div>Item Total(MRP)</div>
                    <div>{}</div>
                </div>
                <div></div>
                <div>
                    <div></div>
                    <div></div>
                </div>
                </div>
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
  )
}

export default Cart