import React, { useRef, useState } from 'react'
import { useEffect } from 'react'
import styled from "./Cart.module.css"
import axios from "axios"
import { get_all_products } from '../store/AllItems/AllItems.action'
import { useDispatch, useSelector } from 'react-redux'
import {useNavigate} from "react-router-dom";
import {BiRupee} from "react-icons/bi"
import { get_single_user, user_state, user_verified } from '../store/User/User.action'
import { USER_VERIFIED } from '../store/User/User.type'
import {TbCurrencyRupee} from "react-icons/tb"
import {MdLocationPin} from "react-icons/md"
const Cart = () => {
    const dispatch=useDispatch()
    const [datawait,setDatawait]=useState(false)
    const [totalAmount,setTotalAmount]=useState(0)
    const [totalDiscount,setTotalDiscount]=useState(0)
    const {city}=useSelector((state)=>state.searchbar)

    useEffect(()=>{
        
        const localuser=JSON.parse(localStorage.getItem("_1mtatauser")) ;
       
        dispatch(user_state(true))
        dispatch(user_verified(localuser.phoneNumber))
        console.log(userdata)
        setTimeout(() => {
            dispatch(user_verified(localuser.phoneNumber))
            if(userdata.cart.items.length>0){
            userdata.cart.items.map(e=>{
                return (e.totalquantity ? null : e.totalquantity=1)
            })
            axios.patch(`https://tatauser.herokuapp.com/user/${userdata._id}`,{
                ...userdata,
              
              })
              
            }
              setDatawait(true)
        }, 3000);
        
     
       
        const closelist = (e) => {
            if (e.path[0] !== inputRef.current) {
              setSearchState(false)
            }
          }
          document.addEventListener('click', closelist)
      
          return () => document.removeEventListener('click', closelist)
    },[])

   
    const {allproducts}=useSelector((state)=>state.getallproducts)
    const {userdata,userState}=useSelector((state)=>state.user)
   
    const [searchState,setSearchState]=useState(false);
    const navigator=useNavigate();
   
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
            let name;
            name=e.name.toLowerCase()
            if(e.type){
                type=e.type;
                type=type.toLowerCase();
                type=type.slice(0,takeninput.length);
            }
            if(e.real){
                real=e.real;
                real=real.toLowerCase();
                real=real.slice(0,takeninput.length);
            }
           if(takeninput==type || takeninput==real || name.includes(takeninput)){
            if(femiliar.includes(e)){
                return 
            }
            else if(femiliar.length<=3){
                femiliar.push(e);
                //setting data to for the dom manipulation
                setData(femiliar);
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

  

    const handleDecrease=(e_data)=>{
        let t=[];
        if(e_data.totalquantity<=1 ){
           userdata.cart.items.filter(e=>{
                return (e._id==e_data._id ? null : t.push(e));

            })
            userdata.cart.items=[...t]
        }
        else{
            userdata.cart.items.filter(e=>{
                return (e._id==e_data._id ? e.totalquantity-=1 : e);

            })
        }
      
     
         axios.patch(`https://tatauser.herokuapp.com/user/${userdata._id}`,{
          ...userdata,
        
        })
        setTimeout(() => {
            dispatch(get_single_user(userdata._id));
        }, 1000);
       
    }
    const handleIncrease=(e_data)=>{
        let t=[];
        userdata.cart.items.filter(e=>{
            return (e._id==e_data._id ? e.totalquantity+=1 : e);

        })
        axios.patch(`https://tatauser.herokuapp.com/user/${userdata._id}`,{
            ...userdata,
          
          })
        setTimeout(() => {
            dispatch(get_single_user(userdata._id));
        }, 1000);
       
       
    }

    const handleRemove=(e_data)=>{
        let t=[];
        userdata.cart.items.filter(e=>{
            return (e._id==e_data._id ? null : t.push(e));

        })
        userdata.cart.items=[...t]
        axios.patch(`https://tatauser.herokuapp.com/user/${userdata._id}`,{
            ...userdata,
          
          })
          setTimeout(() => {
              dispatch(get_single_user(userdata._id));
          }, 1000);
    }
    
  
    useEffect(()=>{
        let tAmount=0;
        let tDiscount=0;
        setTimeout(() => {
          
            userdata.cart.items.map(e=>{
                let price =+(e.price-(e.discount/100)*e.price).toFixed(0);
                let discount=e.price-price;

                return (tAmount+=(price*e.totalquantity), tDiscount+=discount*e.totalquantity)
            })

            setTotalAmount(tAmount);
            setTotalDiscount(tDiscount)
        }, 2000);
      

    },[userdata])

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
        {datawait ? <div className={styled.container}>
            <div className={styled.cartmain}>
                <div className={styled.cartmain_initial}>Items present in cart ( {userdata.cart.items.length || 0} )</div>
                <div>
                    {userdata.cart.items.map(e=>{
                        return <div className={styled.item}>
                            <div>
                            <div className={styled.itemname}>{e.name}</div>
                            <div className={styled.itemquantity}>{e.quantity}</div>
                            <div className={styled.remove} onClick={()=>{
                                handleRemove(e)
                            }}> <img src="https://img.1mg.com/images/delete_icon.svg" alt="" /> <div className={styled.remove_1}>Remove</div></div>
                            <br/>
                            </div>
                            <div className={styled.itemmain_2}>
                            <div className={styled.pricemain}>
                                <div className={styled.pricemain_1}>
                                <BiRupee/>{(e.price-(e.discount/100)*e.price).toFixed(0)}
                                </div>
                                </div>
                            <div className={styled.price}>
                                <div className={styled.pricemain_2}>
                                MRP <span className={styled.linethrough}>{e.price}</span>
                                </div>
                                 </div>
                            <div className={styled.cartquantity}>
                                <div onClick={()=>{
                                  handleDecrease(e)
                                }}><img src="https://www.1mg.com/images/minus-cart.svg" alt="" /></div>
                                <div>{e.totalquantity}</div>
                                <div onClick={()=>{
                                  handleIncrease(e)
                                }}><img src="https://www.1mg.com/images/plus-cart.svg" alt="" /></div>
                            </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
            <div className={styled.paymentmain}>
                <div className={styled.mainpayment}>
                <div className={styled.cartcontent_1}>
                    <div>Item Total(MRP)</div>
                    <div><TbCurrencyRupee/>{totalAmount+totalDiscount}</div>
                </div>
                <div className={styled.cartcontent_1}>
                    <div>Price Discount</div>
                    <div>-<TbCurrencyRupee/>{totalDiscount}</div>
                </div>
                <div className={styled.cartcontent_line}></div>
              
                <div className={`${styled.cartcontent_1} ${styled.tobepaid}`} >
                    <div>To be paid</div>
                    <div><TbCurrencyRupee/>{totalAmount}</div>
                </div>
                <div className={styled.cartcontent_3}>
                <div className={`${styled.cartcontent_1} ${styled.cartcontent_2}`}>
                    <div>Total Savings</div>
                    <div style={{color:"green"}}><TbCurrencyRupee/>{totalDiscount}</div>
                </div>
                </div>
                  </div>
                <div className={styled.cartLocation}>
                    <div>Your delivery location</div>
                    <div className={styled.locationcolor}><MdLocationPin/>{city}</div>
                </div>
                <button className={styled.checkout}>CHECKOUT</button>
            </div>
        </div> : <div>loading</div>}
    </div> 
  )
}

export default Cart